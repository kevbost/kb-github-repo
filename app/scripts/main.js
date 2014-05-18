
// ///////////////////////////////////////////////
// ///////////////////////////////////// Templates
// ///////////////////////////////////////////////

// function              function         string
var logoIcon = _.template($('.logoIconTemplate').text());
var containerVar = _.template($('.containerTemplate').text());
var repos = _.template($('.mainTemplate').text());
// var secret = _.template()


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
        var rendered = repos( module );
        $('.main').append(rendered);
    });
}

// User
function renderUser (rendering){
		// string        function     object
		var rendered = containerVar( rendering );
		$('.sidebar').prepend(rendered);
	}




$('.headContainer').append(logoIcon);
$('.sidebar').append(containerVar);
$('.main').append(repos);
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