/*
Läd den inhalt über eine XMLHttpRequest (kurz XHR)
der erhaltene inhalt welcher vom typ json erwartet wird wird anschließend in
eine tabelle konkadiniert welche dann mit innerHTML in das HTML dokument
eingefügt wird
*/

//Beinhält gedownloadete daten
var teskTable;
//beinhält die Tabelle welche zu bearbeiten ist
var taskContent;

/*
Läd die daten vom server in teskTable und ruft dann tabelleFuellen auf um den inhalt
zu schreiben
*/
var taskTabelleninhalt = function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://botnet.artificial.engineering:8080/api/Tasks', true);
	xhr.onload = function() {
		teskTable = JSON.parse(xhr.response);
		tasktTabelleFuellen();
		sortierenTasks(spaltetask, true);
	};
	xhr.send(null);
};

/*
Füllt die tabelle mit allen nötigen informationen
*/
var tasktTabelleFuellen = function(){
	taskContent = document.querySelector('#tasks-overview tbody');
	taskTabelleLeeren();
	if (teskTable instanceof Array){
		var inhalt = '';
		for(var d = 0; d < teskTable.length; d++){
			var entry = teskTable[d];
			inhalt += '<tr>';
			inhalt += '<td>' + entry.id + '</td>';
			inhalt += '<td>' + entry.type + '</td>';
			inhalt += '<td>' + entry.data.input + '</td>';
			inhalt += '<td>' + entry.data.output + '</td>';
			inhalt += '</tr>';
		}
		taskContent.innerHTML = inhalt;
	}
	else{
		taskContent.innerHTML = '<tr><td colspan=5>Es gab einen Fehler beim Laden der Serverliste</td></tr>';
	}
};

/*
Soll die taskContent tabelle leeren
*/
var taskTabelleLeeren = function(){
	while(taskContent.rows.length > 0){
		taskContent.deleteRow(0);
	}
}