import browserLocalstorage from 'browser-localstorage-expire';

// Add your scripts here
// Goal: storing the API data for a certain amount of time
// so I don't have to wait for the API call every single time

const localCache = browserLocalstorage();
let storedData = localCache.getItem('apiData');
const container = document.querySelector('#js-ideasResults');

// Goal: Return HTML with data from item
function createIdeaMarkup(item) {
  // Goal: Create a template for my idea result
  const ideaTemplate = `<article class="idea">
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

function addMarkup(data) {
  const first = getRandomNumber(storedData.items.length);
  const second = getRandomNumber(storedData.items.length);
  
  container.innerHTML += createIdeaMarkup(data.items[first]);
  container.innerHTML += createIdeaMarkup(data.items[second]);
}

function getData() {
  fetch('https://api.raindrop.io/rest/v1/raindrops/13023541?perpage=50', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OAUTH_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
    // Goal: Save the data
      console.log(data);
      storedData = data;
      localCache.setItem('apiData', storedData);
      addMarkup(storedData);
    });
}

// Check if the data has been saved
if (storedData === null) {
  console.log('Fetching data');
  getData();
} else {
  console.log('It was stored');
  addMarkup(storedData);
}

// Goal: showing TWO random bookmarks from my stored data
// Do this each time the button is clicked
// Goal: Change button text to "Generate Again" after initial click
// Goal: Add my results to js-ideasResults
