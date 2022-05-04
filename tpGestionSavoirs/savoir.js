//Copié collé de https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus //

focusMethod = function getFocus() {
    document.getElementById("savoirFocus").focus();
}

/* à regarder pour récupérer la valeur de la date en JS
https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/date */

//c/c de https://www.demo2s.com/javascript/javascript-date-set-input-type-date-s-default-value-to-today.html //

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day;
document.getElementById('theDate').value = today;

//

/*function getSavoir() {
    const savoir = document.querySelector('input#savoir').value;
    console.log(savoir);
}

function getAuteur() {
    const auteur = document.querySelector('input#auteur').value;
    console.log(auteur);
}

function getCal() {
    const cal = document.querySelector('input#theDate').value;
    console.log(cal);
}*/

const getValueInput = () =>{
    let valueSavoir = document.getElementById("savoir").value;
    document.getElementById("valueSavoir").innerHTML = valueSavoir;
    let valueAuteur = document.getElementById("auteur").value;
    document.getElementById("valueAuteur").innerHTML = valueAuteur;
    let valueDate = document.getElementById("theDate").value;
    document.getElementById("valueDate").innerHTML = valueDate;
}