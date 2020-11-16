// Add your scripts here

fetch( 'https://api.raindrop.io/rest/v1/raindrops/13023541?perpage=50', {
  headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer ' + process.env.OAUTH_TOKEN,
	},
} )
  .then( response => response.json() )
  .then( data => {
    console.log(data);
    
    for ( const item of data.items ) {
      console.log(item.title);
    }
  } );
