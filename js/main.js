

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

	// Animate our #section-one
	$('#section-one').animate({
		'opacity': 0.25,
		'width': '75%',
		'border-width': 40
	});

	// 
	$('#section-two').on('click', function(){
		alert('You did it!');

	})

	// one animation triggering another element
	// create an animation, inside of an anonymous function
	// stored in a var
	

	var animateMenu = function(){
		$('.menu').animate({
			'border-width': 40,

		});
	}
	$('.menu').show(animateMenu)
	

}) // closes doc.ready

