class request{

	constructor(_url){
		this.url = _url;
	}

	// making request
	response(_params){
	
		let requestReponse = null;
		const xhttp = new XMLHttpRequest();

  		xhttp.onreadystatechange = function() {

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

}


export class search extends request{

	constructor(_url, _location){

		super(_url);
		this._location = _location;

		// exec function
		this.params();
	
	}

  params(){

  		let params = new FormData();
		params.append("location", this._location);
		this.response(params);
  }


  // print the cards template
  static template(_response){

  	//Container that the template will be printed
	var section = document.querySelector('#pets');

	// loop trought pets and printing their profiles
  	for(let i = 0; i < _response.data.length; i++){

  		let petResponse = _response.data[i];

  		let petListTemplate = `

	  		<li>${petResponse.name}</li>
	  		<li>${petResponse.age}</li>
	  		<li>${petResponse.breed}</li>
  		`;

		// printing
  		section.insertAdjacentHTML('beforeend', petListTemplate);

  	}



  }

}

