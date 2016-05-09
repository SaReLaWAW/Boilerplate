//gibt an welcher art von sortierung gewünscht ist
var ascstatus = true;
var asctask = true;
var spaltestatus = '';
var spaltetask = '';

/*
Steuerungs funktion der sortierung
*/
var sortierenTabelle = function(spalte, fillaufruf){
	if(spalte != ''){
		spaltestatus = spalte;
		if(ascstatus == true) {
			if(fillaufruf == false){
				tabelData.sort(SortAsc(spalte));
				ascstatus = false;
			}else{
				tabelData.sort(SortDesc(spalte));
			}
		}
		else {
			if(fillaufruf == false){
				tabelData.sort(SortDesc(spalte));
				ascstatus = true;
			}else{
				tabelData.sort(SortAsc(spalte));
			}
		}
		tabelleFuellen();
	}
};

/*
Da ich die variablen der task tabelle auf grund der eindeutigkeit geändert habe muss ich hier nocheinmal einen sort für die tasks schreiben
*/
var sortierenTasks = function(spalte, fillaufruf){
	if(spalte != ''){
		spaltetask = spalte;
		if(asctask == true) {
			if(fillaufruf == false){
				teskTable.sort(SortAsc(spalte));
				asctask = false;
			}else{
				teskTable.sort(SortDesc(spalte));
			}
		}
		else {
			if(fillaufruf == false){
				teskTable.sort(SortDesc(spalte));
				asctask = true;
			}else{
				teskTable.sort(SortAsc(spalte));
			}
		}
		tasktTabelleFuellen();
	}
};

/*
Eigendlicher sortierungs algorytmuss für ASC
*/
var SortAsc = function(prop) {
    return function(a,b) {
		if (typeof a[prop] === 'string' || a[prop] instanceof String){
			return a[prop].localeCompare(b[prop]);
		}else{
			return a[prop] - b[prop];
		}
    };
};

/*
Eigendlicher sortierungs algorytmuss für DESC
*/
var SortDesc = function(prop) {
    return function (a, b) {
		if (typeof a[prop] === 'string' || a[prop] instanceof String){
			return b[prop].localeCompare(a[prop]);
		}else{
			return b[prop] - a[prop];
		}
    };
};