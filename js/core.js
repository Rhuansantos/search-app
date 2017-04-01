class request{

	constructor(_url, _method, _template){
		this.url = _url;
		this.method = _method;
		this.template = _template;
	}

	// making request
	response(_params){

		var grabTemplate = this.template;

		let requestReponse = null;
		const xhttp = new XMLHttpRequest();

  		xhttp.onreadystatechange = function() {

		    if (this.readyState == 4 && this.status == 200) {

		     // creating object
		     requestReponse = JSON.parse(this.responseText);

		     // seding request for template
		     let test = new search();
		     test.printTemplate(requestReponse, grabTemplate);

		    }
  		};

		  xhttp.open(this.method, this.url, true);
		  xhttp.send(_params);

		  return requestReponse;
	}

}


export class search extends request{

	constructor(_url, _method, _template, _params){

		super(_url, _method, _template);
		this.params = _params;

		// exec function
	 	this.query(this.params);
	 		
	}

  query(_params){

		this.response(_params);
  }


  // print the cards template
  printTemplate(_response, _template){

  	console.log("response", this.template, "response2", _template);
  	//Container that the template will be printed
	var section = document.querySelector('#pets');

	// loop trought pets and printing their profiles
  	for(let i = 0; i < _response.data.length; i++){

  		let requestReponse = _response.data[i];


		// printing
  		section.insertAdjacentHTML('beforeend', _template);

  	}

  }

}

