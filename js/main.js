class request{

	constructor(_url){
		this.url = _url;

		this.response();

	}

	response(_params){
	
		let requestReponse = null;
		const xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		     
		     requestReponse = JSON.parse(this.responseText);

		     console.log(requestReponse);

		    }
  		};


		  xhttp.open("POST", this.url, true);
		  xhttp.send(_params);

		 alert('ok');

		  return requestReponse;

	}

}


class search extends request{

	constructor(_url, _location, _type, _breed){
		super(_url);
		this.location = _location;
		this.type = _type;
		this.breed = _breed;

	}

  params(_location, _type, _breed){

  		const data = new FormData();
		data.append("location", "32792");
		data.append("type", "dog");
		data.append("breed", "");
  }

  static template(){
  	console.log("template");

  	// var container = document.createElement('petList);

  	// 	  	var section  = document.getElementById('pets');
  }

}



const find = new search('http://api.adopets.local:88/pet/find');
// find.params();
// search.template();



