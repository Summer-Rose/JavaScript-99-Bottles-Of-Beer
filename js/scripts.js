function bottlesOfBeer(number) {
	var ibottle = " bottles";
	var jbottle = " bottles";
	var text = [];

	for (var i = number; i >= 0; i--) {
		var j = i - 1;

		if (i === 1) {
			ibottle = " bottle";
		}
		if (j === 1) {
			jbottle = " bottle";
		}
		if (j === 0) {
			jbottle = " bottles";
		}

		if (i === 0) {
			text.push("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
		} else {
			text.push(i + ibottle + " of beer on the wall, " + i + ibottle + " of beer. Take one down, pass it around, " + j + jbottle + " of beer on the wall.");
		}
	}
	return text;
};

$(document).ready(function() {
	$("form#numberForm").submit(function() {
		var number = parseInt($("input#number").val());
		var resultArray = bottlesOfBeer(number);

		$("#results").show();
		$(".numberEntered").text(number);
		event.preventDefault();
	});
});
