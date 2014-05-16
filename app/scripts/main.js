
// ///////////////////////////////////////////////
// ///////////////////////////////////// Templates
// ///////////////////////////////////////////////

// function              function         string
var logoIcon = _.template($('.logoIconTemplate').text());
var containerVar = _.template($('.containerTemplate').text());
// var repos = _.template($('.mainTemplate').text());


// ///////////////////////////////////////////////
// ////////////////////////////////// Fetch Repo's
// ///////////////////////////////////////////////

$.getJSON('https://api.github.com/users/kevbost/repos').done(function(reposApi){
    renderRepos(reposApi);
});
$.getJSON('https://api.github.com/users/kevbost').done(function(userApi){
	renderUser(userApi);
});


// ///////////////////////////////////////////////
// ///////////////////////////////Render functions
// ///////////////////////////////////////////////

// Repos
function renderRepos (rendering) {
    rendering.forEach(function(module){
        // string        function     object
        var rendered = containerVar( module );
        $('.container').prepend(rendered);
    });
}

// User
function renderUser (rendering){
		// string        function     object
		var rendered = containerVar( rendering );
		$('.container').prepend(rendered);
	}




$('.headContainer').append(logoIcon);
$('.container').append(containerVar);
// $('.main').append(main);



// ========
// My Notes
// ========

// //function                 function         string
// var goodMorningTemplate = _.template($('Goodmorning, <%= person %>.').text());

// // string                     function        object (literal)
// var morningJuniper = goodMorningTemplate({person: 'Juniper'});
// var morningKevin = goodMorningTemplate({  person: 'Kevin',
// 										  feeling: 'great'
// });

// // function     string
// console.log(morningKevin);

// // push it to the browser
// $('body').prepend(morningKevin);


// var people = [
// 	{
// 		person: 'Kevin',
// 		feeling: 'Awesome'
// 	}
// ];