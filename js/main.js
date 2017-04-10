import {search} from './core'

class main{

	static searchPet() {

		const zipCode = document.querySelector('#location').value;

		// search params
		let params = new FormData();
		params.append("location", zipCode);
		params.append("limit", "12");
		params.append("type", "");

		let adopets = new search('https://api.beta.adopets.org/pet/find', "POST", null, params);
		// let adopets = new search('http://api.adopets.local:88/pet/find', "POST", null, params);

	}

}

document.getElementById('menuMobile').addEventListener('click', (event) => {

    var menu = document.getElementById('menuList');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }

})

 document.getElementById('submitSearch').addEventListener('click', (event) => {

    event.preventDefault();
    main.searchPet();

 })


