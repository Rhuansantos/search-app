(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = function () {
	function request(_url) {
		_classCallCheck(this, request);

		this.url = _url;
	}

	// making request


	_createClass(request, [{
		key: "response",
		value: function response(_params) {

			var requestReponse = null;
			var xhttp = new XMLHttpRequest();

			xhttp.onreadystatechange = function () {

				if (this.readyState == 4 && this.status == 200) {

					// creating object
					requestReponse = JSON.parse(this.responseText);

					// seding request for template
					search.template(requestReponse);
				}
			};

			xhttp.open("POST", this.url, true);
			xhttp.send(_params);

			return requestReponse;
		}
	}]);

	return request;
}();

var search = exports.search = function (_request) {
	_inherits(search, _request);

	function search(_url, _location) {
		_classCallCheck(this, search);

		var _this = _possibleConstructorReturn(this, (search.__proto__ || Object.getPrototypeOf(search)).call(this, _url));

		_this._location = _location;

		// exec function
		_this.params();

		return _this;
	}

	_createClass(search, [{
		key: "params",
		value: function params() {

			var params = new FormData();
			params.append("location", this._location);
			this.response(params);
		}

		// print the cards template

	}], [{
		key: "template",
		value: function template(_response) {

			//Container that the template will be printed
			var section = document.querySelector('#pets');

			// loop trought pets and printing their profiles
			for (var i = 0; i < _response.data.length; i++) {

				var petResponse = _response.data[i];

				var petListTemplate = "\n\n\t  \t\t<li>" + petResponse.name + "</li>\n\t  \t\t<li>" + petResponse.age + "</li>\n\t  \t\t<li>" + petResponse.breed + "</li>\n  \t\t";

				// printing
				section.insertAdjacentHTML('beforeend', petListTemplate);
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
			var adopets = new _core.search('https://api.beta.adopets.org/pet/find', zipCode);
		}
	}]);

	return main;
}();

main.searchPet();

},{"./core":1}]},{},[2]);
