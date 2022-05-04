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

