

// write a function that takes a first name as an argument
// Have it log your firstname to the console

var myFirstName = function(firstName){
	console.log('My first name is ' + firstName);

}
// invoke that function.
myFirstName('Sean');

$(document).on('ready', function(){
	// now I've ensured my DOM is ready, I may proceed

// CALLBACKS!!!
	// create an anon function that we will use as a callback
	var bake = function(){
		console.log('You may now bake!');
	}

	// create an anon function that accepts an argument
	// invole that argument
	var preHeatOven = function(callback){
		console.log('oven is pre-heated');
		callback()// invoke the argument as a function
	}

	// now invoke preHeatOven, passing in bake as an argument
	preHeatOven(bake);


}) // closes doc.ready