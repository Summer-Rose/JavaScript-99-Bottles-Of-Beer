function bottlesOfBeer(number) {
	var ibottle = " bottles";
	var jbottle = " bottles";
	var text = [];

	for (var i = number; i >= 0; i--) {
		var j = i - 1;

		if (i === 1) {
			ibottle = " bottle";
			debugger;
		}
		if (j !== 0 && j === 1) {
			jbottle = " bottle";
		}

		if (i === 0) {
			text.push("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
		} else {
			text.push(i + ibottle + " of beer on the wall, " + i + ibottle + " of beer. Take one down, pass it around, " + j + jbottle + " of beer on the wall.");
			debugger;
		}

	}
	return text;
};
