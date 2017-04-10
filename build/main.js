(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = function () {
	function request(_url, _method, _template) {
		_classCallCheck(this, request);

		this.url = _url;
		this.method = _method;
		this.template = _template;
	}

	// making request


	_createClass(request, [{
		key: 'response',
		value: function response(_params) {

			var grabTemplate = this.template;

			var requestReponse = null;
			var xhttp = new XMLHttpRequest();

			xhttp.onreadystatechange = function () {

				if (this.readyState == 4 && this.status == 200) {

					// creating object
					requestReponse = JSON.parse(this.responseText);

					// seding request for template
					var test = new search();
					test.printTemplate(requestReponse);
				}
			};

			xhttp.open(this.method, this.url, true);
			xhttp.send(_params);

			return requestReponse;
		}
	}]);

	return request;
}();

var search = exports.search = function (_request) {
	_inherits(search, _request);

	function search(_url, _method, _template, _params) {
		_classCallCheck(this, search);

		var _this = _possibleConstructorReturn(this, (search.__proto__ || Object.getPrototypeOf(search)).call(this, _url, _method, _template));

		_this.params = _params;

		// exec function
		_this.query(_this.params);

		return _this;
	}

	_createClass(search, [{
		key: 'query',
		value: function query(_params) {

			this.response(_params);
		}

		// print the cards template

	}, {
		key: 'printTemplate',
		value: function printTemplate(_response) {

			console.log(_response);

			//Container that the template will be printed
			var section = document.querySelector('#pets');

			// loop trought pets and printing their profiles
			for (var i = 0; i < _response.data.length; i++) {

				var requestReponse = _response.data[i];

				var petTemplate = '\n\t\t<li>\n\t\t\t<img src="' + requestReponse.picture + '" alt="" />\n\t\t\t<div class="pet-info">\n\t\t\t<h1>' + requestReponse.name + '</h1>\n\t\t\t<h2>Age: <span>' + requestReponse.age + '</span></h2>\n\t\t\t<h2>Breed: <span>' + requestReponse.breed + '</span></h2>\n\t\t\t</div>\n\t\t</li>\n\t\t';

				// printing
				section.insertAdjacentHTML('beforeend', petTemplate);
			}
		}
	}]);

	return search;
}(request);

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('./core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var main = function () {
    function main() {
        _classCallCheck(this, main);
    }

    _createClass(main, null, [{
        key: 'searchPet',
        value: function searchPet() {

            var zipCode = document.querySelector('#location').value;

            // search params
            var params = new FormData();
            params.append("location", zipCode);
            params.append("limit", "12");
            params.append("type", "");

            var adopets = new _core.search('https://api.beta.adopets.org/pet/find', "POST", null, params);
            // let adopets = new search('http://api.adopets.local:88/pet/find', "POST", null, params);
        }
    }]);

    return main;
}();

document.getElementById('menuMobile').addEventListener('click', function (event) {

    var menu = document.getElementById('menuList');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

document.getElementById('submitSearch').addEventListener('click', function (event) {

    event.preventDefault();
    main.searchPet();
});

},{"./core":1}]},{},[2]);
