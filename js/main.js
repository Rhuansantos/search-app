import {search} from './core'

class main{


static searchPet() {

	const zipCode = document.querySelector('#location').value;
	let adopets = new search('https://api.beta.adopets.org/pet/find', zipCode);

}


}


main.searchPet();