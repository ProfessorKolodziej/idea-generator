import browserLocalstorage from 'browser-localstorage-expire';

// Add your scripts here
// Goal: storing the API data for a certain amount of time
// so I don't have to wait for the API call every single time

const localCache = browserLocalstorage();
let storedData = localCache.getItem('apiData');
const container = document.querySelector('#js-ideasResults');
const button = document.querySelector('#js-ideasButton');

// Goal: Return HTML with tags from item data
function createTagMarkup(item) {
  let tagMarkup = '';

  item.tags.forEach((tag) => { tagMarkup += `<span>${tag}</span>`; });

  return tagMarkup;
}

// Goal: Return HTML with classes from item data
function createClasses(item) {
  let classes = '';

  item.tags.forEach((tag) => { classes += ` tag-${tag}`; });

  return classes;
}

// Goal: Return HTML with data from item
function createIdeaMarkup(item) {
  const ideaTags = createTagMarkup(item);
  const ideaClasses = createClasses(item);

  // Goal: Create a template for my idea result
  const ideaTemplate = `<article class="idea ${ideaClasses}">
      <div class="idea-tags">${ideaTags}</div>
      <img src="${item.media[0].link}" alt="Thumbnail for ${item.title}" class="idea-image" />
      <h2 class="idea-title">${item.title}</h2>
      <p class="idea-description">${item.excerpt}</p>
      <a href="${item.link}" class="idea-learnmore">Learn more about ${item.title}</a>
    </article>`;

  return ideaTemplate;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addMarkup() {
  container.innerHTML = '';

  const first = getRandomNumber(storedData.items.length);
  let second = getRandomNumber(storedData.items.length);

  while (first === second) {
    second = getRandomNumber(storedData.items.length);
  }

  container.innerHTML += createIdeaMarkup(storedData.items[first]);
  container.innerHTML += createIdeaMarkup(storedData.items[second]);
}

let page = 0;
const itemLimit = 50;

function getData() {
  fetch(`https://api.raindrop.io/rest/v1/raindrops/15045214?page=${page}&perpage=${itemLimit}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OAUTH_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
    // Store the data initially, then append items from later queries.
      if (storedData === null) {
        storedData = data;
      } else {
        const tempArray = storedData.items.concat(data.items);
        storedData.items = tempArray;
      }

      // Get items recursively until we run out of pages.
      // Then, cache and store it.
      if (data.items.length === itemLimit) {
        page += 1;
        getData();
      } else {
      // Cache in localStorage and expire it weekly.
        localCache.setItem('apiData', storedData, 10080);
        addMarkup();
      }
    });
}

// Check if the data has been saved
if (storedData === null || storedData.auth === false) {
  getData();
} else {
  addMarkup();
}

button.addEventListener('click', addMarkup);
