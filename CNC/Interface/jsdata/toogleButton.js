/*
Erkennt Buttons durch .getElementById anhand der ID welche in Filltable
durchnummeriert wird.
.innerHTML wird zum prüfen des inhaltes genutzt und zum verändern des
Selbigen.
Desweiteren wird eine farbliche änderung bei klick erwirkt
*/
function toogleButton(button_id){ 
	var taste = document.getElementById(button_id);
	var stutssen = new XMLHttpRequest();
	stutssen.open('POST','http://botnet.artificial.engineering:8080/api/Status/');
	stutssen.setRequestHeader('content-type','application/json');
	stutssen.setRequestHeader('toekn','8d5e8be2efb2756510f8daf76b1094b2');
	var statusdate = {
		id: button_id,
		status: false
	};
	if(taste.innerHTML == 'Start'){
		taste.innerHTML = 'Stop';
		taste.style.backgroundColor = 'red';
		statusdata.status = true;
	}
	else{
		taste.innerHTML = 'Start';
		taste.style.backgroundColor = 'green';
		statusdata.status = false;
	}
};