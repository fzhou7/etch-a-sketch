width = 0;
length = 0;
$(document).ready(function() {
	width = prompt("Enter grid width");
	length = prompt("Enter grid length");
	for (var i=1; i<=width; i++) {
		for (var j=1; j<=length; j++) {
			$box = $("<div />", {class: "gridBox"});
			$(".wrapper").append($box);
		}
		$(".wrapper").append("<br />");
	}
	$(".gridBox").mouseenter(function() {
		$(this).css("background-color", "#3366FF");
	});
	$(".gridBox").click(function() {
		$(this).css("background-color", "#E4E4E4");
	});
});

function newGrid() {
	width = prompt("Enter grid width");
	length = prompt("Enter grid length");
	$(".wrapper").empty();
	for (var i=1; i<=width; i++) {
		for (var j=1; j<=length; j++) {
			$box = $("<div />", {class: "gridBox"});
			$(".wrapper").append($box);
		}
		$(".wrapper").append("<br />");
	}
	$(".gridBox").mouseenter(function() {
		$(this).css("background-color", "#3366FF");
	});
	$(".gridBox").click(function() {
		$(this).css("background-color", "#E4E4E4");
	});
}