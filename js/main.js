import {search} from './core'

class main{


static searchPet() {
	console.log('ok');
	const zipCode = document.querySelector('#location').value;
	let adopets = new search('https://api.beta.adopets.org/pet/find', "POST", zipCode);

}

static searchMusic() {
	console.log('ok');
	let spotify = new search('https://api.spotify.com/v1/search?q=projota&type=artist', "GET");

}


}


 document.getElementById('submitSearch').addEventListener('click', (event) => {

    event.preventDefault();
    main.searchPet();

 })


