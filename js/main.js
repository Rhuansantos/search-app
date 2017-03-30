class search{

constructor(location, type) {
    this.location 	= location;
    this.type 		= type;

  }

  test(){
  	const uri 	= 'http://api.beta.adopets.org/pet/find';

	return console.log(" 'Your Location' " + this.location);
  }

}

var find = new search("florida", "dog");
find.test();