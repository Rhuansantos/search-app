import {search} from './core'


const zipCode = document.querySelector('#location').value;

let adopets = new search('http://api.beta.adopets.org/pet/find', zipCode);
