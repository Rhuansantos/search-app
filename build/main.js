'use strict';

var zipCode = document.querySelector('#location').value;

var adopets = new search('http://api.beta.adopets.org/pet/find', zipCode);