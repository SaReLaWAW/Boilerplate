/*
zu erst wird eine Json erstellt
dann wird per je nach button status per XHR eine post request auf den server gestertet
als inhalt wird die zu beginn genutzte JSon übergeben
*/
//8d5e8be2efb2756510f8daf76b1094b2   token

var senden = function() {
	var type = document.getElementById('type').value;
	var comand = document.getElementById('inhaltDesTasks').value;
	var sendata = {
		type : type,

		data : {
			input: comand
		}
	};
	var sen = new XMLHttpRequest();
	sen.open('POST', 'http://botnet.artificial.engineering:8080/api/tasks');
	sen.responseType = 'json';
	sen.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
	sen.setRequestHeader('Token', '8d5e8be2efb2756510f8daf76b1094b2');
	sen.onload = function() {
		//für später
	};
	sen.send(JSON.stringify(sendata));
};
