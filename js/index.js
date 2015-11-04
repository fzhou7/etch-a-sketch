$(document).ready(function() {
	var width = prompt("Enter grid width");
	var length = prompt("Enter grid length");
	for (var i=1; i<=width; i++) {
		for (var j=1; j<=length; j++) {
			var $box = $("<div />", {class: "gridBox"});
			$(".wrapper").append($box);
		}
	}
});

function makeGrid(columns, rows) {
	for (var i=1; i<=columns; i++) {
		for (var j=1; j<=rows; j++) {
			var $box = $("<div />", {class: "gridBox"});
			$("").append($box);
			if (j === rows) {
				document.write("<br>");
			}
		}
	}
};