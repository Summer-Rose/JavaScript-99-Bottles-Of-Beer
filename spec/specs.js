describe('bottlesOfBeer', function() {
  it("returns a text array with a length of 3", function() {
    expect(bottlesOfBeer(2)).to.have.length(3);
  });

  it("returns the song as expected", function() {
  	expect(bottlesOfBeer(2)).to.eql(["2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall.", "1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, 0 bottles of beer on the wall.", "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."]);
  	});
});

