import {search} from './core'

class main{


static searchPet() {
	console.log('ok');
	const zipCode = document.querySelector('#location').value;
	// const zipCode = document.querySelector('#location').value;

	// search params
	let params = new FormData();
	params.append("location", zipCode);
	params.append("limit", "12");
	params.append("type", "cat");

	let adopets = new search('https://api.beta.adopets.org/pet/find', "POST", null, params);

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


