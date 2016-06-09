/*
L�d den inhalt �ber eine XMLHttpRequest (kurz XHR)
der erhaltene inhalt welcher vom typ json erwartet wird wird anschlie�end in
eine tabelle konkadiniert welche dann mit innerHTML in das HTML dokument
eingef�gt wird
*/

//Beinh�lt gedownloadete daten
var tabelData;
//beinh�lt die Tabelle welche zu bearbeiten ist
var content;

/*
L�d die daten vom server in tabelData und ruft dann tabelleFuellen auf um den inhalt
zu schreiben
*/
var tabelleninhalt = function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:3000/api/Status', true);
	//xhr.open('GET', 'http://botnet.artificial.engineering:8080/api/Status', true);
	xhr.onload = function() {
		tabelData = JSON.parse(xhr.response);
		tabelleFuellen();
		sortierenTabelle(spaltestatus, true);
	};
	xhr.send(null);
};

/*
F�llt die tabelle mit allen n�tigen informationen
*/
var tabelleFuellen = function(){
	content = document.querySelector('#status-overview tbody');
	tabelleLeeren();
	if (tabelData instanceof Array){
		var inhalt = '';
		for(var d = 0; d < tabelData.length; d++){
			var entry = tabelData[d];
			inhalt += '<tr>';
			inhalt += '<td>' + entry.id + '</td>';
			inhalt += '<td>' + entry.ip + '</td>';
			inhalt += '<td>' + entry.task + '</td>';
			inhalt += '<td>' + entry.workload + '</td>';
			if (entry.workload == 0){
				inhalt += '<td><button type="button" id="'+d+'onoff"onClick="toogleButton(this.id);" class="mainButton">Start</button></td>';
			}else {
				inhalt += '<td><button type="button" id="'+d+'onoff"onClick="toogleButton(this.id);" class="mainButton" style="background-color:red;">Stop</button></td>';
			}
			inhalt += '</tr>';
		}
		content.innerHTML = inhalt;
	}
	else{
		content.innerHTML = '<tr><td colspan=5>Es gab einen Fehler beim Laden der Serverliste</td></tr>';
	}
};

/*
Soll die content tabelle leeren
*/
var tabelleLeeren = function(){
	while(content.rows.length > 0){
		content.deleteRow(0);
	}
}