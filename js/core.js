class request{

	constructor(_url){
		this.url = _url;
	}

	response(_params){
	
		let requestReponse = null;
		const xhttp = new XMLHttpRequest();

	
  		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		     
		     requestReponse = JSON.parse(this.responseText);

		     console.log(requestReponse);

		     search.template();

		    }
  		};


		  xhttp.open("POST", this.url, true);
		  xhttp.send(_params);

		  return requestReponse;

	}

}


export class search extends request{

	constructor(_url, _location, _type, _breed){

		super(_url);
		this._location = _location;
		// this._type = _type;
		// this._breed = _breed;

		// calling function
		this.params();
	
	}


  params(){

  		let params = new FormData();
		params.append("location", this._location);
		// params.append("type", _type);
		// params.append("breed", _breed);

		this.response(params);

  }

  // print the cards template
  static template(){
  	console.log("template");

	const tmpl = addrs => html`
	    <table>
	    ${addrs.map(addr => html`
	        <tr>$${this.location}</tr>
	    `)}
	    </table>
	`;



  }

}





