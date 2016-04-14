/*
L�d den inhalt �ber eine XMLHttpRequest (kurz XHR)
der erhaltene inhalt welcher vom typ json erwartet wird wird anschlie�end in
eine tabelle konkadiniert welche dann mit innerHTML in das HTML dokument
eingef�gt wird
*/
var tabelleninhalt = function(){
	var xhr = new XMLHttpRequest();
	var content = document.querySelector('#status-overview tbody');
	xhr.open('GET', 'http://botnet.artificial.engineering:8080/api/Status');
	xhr.responseType = 'json';
	xhr.onload = function() {
		var data = xhr.response;
		if (data instanceof Array){
			var inhalt = '';
			for(var d = 0; d < data.length; d++){
				var entry = data[d];
				inhalt += '<tr>';
				inhalt += '<td>' + entry.id + '</td>';
				inhalt += '<td>' + entry.ip + '</td>';
				inhalt += '<td>' + entry.task + '</td>';
				inhalt += '<td>' + entry.workload + '</td>';
				inhalt += '<td><button type="button" id="onoff'+d+'"onClick="toogleButton(this.id);">Start</button></td>';
				inhalt += '</tr>';
			}
			content.innerHTML = inhalt;
		}
		else{
			content.innerHTML = 'Es gab einen Fehler beim Laden der Serverliste';
		}
	};
	xhr.send(null);
};