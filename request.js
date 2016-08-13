function myfunction(){
		//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
window.onload = function(){
 document.getElementById("movie").focus();
}
var xhr = new XMLHttpRequest();
var url = "https://www.omdbapi.com/?t=";
var str = document.getElementById("movie").value;
var t = str.split(" ");

var movie = "";
for(var i=0;i<t.length-1;i++){
	movie+=t[i] + "+";
}
movie+=t[t.length-1];
var arr;
url+=movie;
xhr.open("GET", url, true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {	
    if (xhr.status === 200) {
      	var myarr=JSON.parse(xhr.responseText);
	var title = "Title" + " | " + myarr["Title"];
	var year = "Year" + " | " + myarr["Year"];
	var actors = "Actors" + " | " + myarr["Actors"];
	var plot = "Plot" + " | " + myarr["Plot"];
	var imdbRating = "IMDB Rating" + " | " + myarr["imdbRating"];
	document.getElementById("title").innerHTML = title;
	document.getElementById("year").innerHTML = year;
	document.getElementById("actors").innerHTML = actors;
	document.getElementById("plot").innerHTML = plot;
	document.getElementById("imdbRating").innerHTML = imdbRating;
	document.getElementById("movie").select();
	//console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
}
