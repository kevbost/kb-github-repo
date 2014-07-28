var _;
var logoIcon = _.template($(".logoIconTemplate").text());
var	containerVar = _.template($(".containerTemplate").text());
var	repos = _.template($(".mainTemplate").text());
$.getJSON("https://api.github.com/users/kevbost/repos").done(function(a) {
	renderRepos(a)
}), $.getJSON("https://api.github.com/users/kevbost").done(function(a) {
	renderUser(a)
}), $.getJSON("https://api.github.com/users/kevbost").done(function(a) {
	renderNav(a)
}), $(".headContainer").append(logoIcon), $(".sidebar").append(containerVar);

function renderRepos(a) {
	a.forEach(function(a) {
		var b = repos(a);
		$(".reposContainer").append(b)
	})
}

function renderNav(a) {
	var b = logoIcon(a);
	$(".headContainer").html(b)
}

function renderUser(a) {
	var b = containerVar(a);
	$(".sidebar").prepend(b)
}