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

$.getJSON('https://api.github.com/users/kevbost/repos?client_id=beadb55394dbd2d3da3c&client_secret=2bdf53bdfababf328a91930f15d2698a3b1a3a25').done(function(reposApi){
    renderRepos(reposApi);
});
$.getJSON('https://api.github.com/users/kevbost?client_id=beadb55394dbd2d3da3c&client_secret=2bdf53bdfababf328a91930f15d2698a3b1a3a25').done(function(userApi){
	renderUser(userApi);
});
$.getJSON('https://api.github.com/users/kevbost?client_id=beadb55394dbd2d3da3c&client_secret=2bdf53bdfababf328a91930f15d2698a3b1a3a25').done(function(userNav){
	renderNav(userNav);
});

// $.getJSON('https://api.github.com/users/kevbost/starred').done(function(starApi){
// 	renderStar(starApi);
// });

// ///////////////////////////////////////////////
// ///////////////////////////////Render functions
// ///////////////////////////////////////////////

// Repos
function renderRepos (rendering) {
    rendering.forEach(function(module){
        var rendered = repos( module );
        $('.reposContainer').append(rendered);
        // $('.participationGraph').css({'width':'100px','background-color':'orange'});
    });
}

// User
function renderNav (rendering){
		// string        function     object
		var rendered = logoIcon( rendering );
		$('.headContainer').html(rendered);
	}

function renderUser (rendering){
		// string        function     object
		var rendered = containerVar( rendering );
		$('.sidebar').prepend(rendered);
	}


$('.headContainer').append(logoIcon);
$('.sidebar').append(containerVar);