document.addEventListener("DOMContentLoaded", FirstClick);
var myData = [];
var pushFirst ;
var pushOld ;
var loadNumber = 0;
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function FirstClick(){
	loadBtn.onclick = loadinfo;
	showBtn.onclick = nextinfo;
	pushFirst = document.querySelector('#output1');
	pushOld = document.querySelector('#output2');
}	

function loadinfo() {
	if (document.getElementById("loadBtn").className === "btn enabled"){
	var req = new XMLHttpRequest();
	req.open('GET', '/Desktop/MAD9014-midterm+notes/MidTerm/users.json', false );
	req.onreadystatechange = function( ){
    	if( req.readyState === 4){
        	if( req.status === 200){
			}
    	}
	};
	req.send( null );  
	myData = JSON.parse( req.responseText );
	document.getElementById("showBtn").className = "btn enabled";
	document.getElementById("loadBtn").className = "btn disabled";
	}
}

function nextinfo(){
	document.getElementById("showBtn").innerHTML = "Show Next";
	var UserPhoto = '<img src = "' + myData[loadNumber].image + '">';
	var UserName = '<h2>' + myData[loadNumber].firstName.capitalize() + " " + myData[loadNumber].lastName.capitalize() + '</h2>';
	var UserEmail = '<a href = mailto:'  + myData[loadNumber].email + '>' + myData[loadNumber].email + '</a>';
	pushFirst.innerHTML = (UserPhoto + UserName + UserEmail);
		var i = 0;	
		var userData = "";
		var output = "";
		for (i = 1; i<= 3; i++) {
		if(loadNumber - i >= 0) {
			userData ='<div class="oldData">';
			userData = userData +'<div>';
			userData = userData + '<img src = "' + myData[loadNumber - i].thumbnail + '">';
			userData = userData + '<a href = mailto:'  + myData[loadNumber - i].email + '>' + myData[loadNumber - i ].firstName.capitalize() + " " + myData[loadNumber - i ].lastName.capitalize() + '</a>';
			userData = userData + '</div>';
			userData = userData + '</div>';
			output = userData + output;
		}
	}
	pushOld.innerHTML = output;
	loadNumber ++;
}