describe('wordPuzzle', function () {
  it("will remove vowels and replace them with '-''", function () {
    expect(wordPuzzle("wheel of fortune")).to.equal("wh--l -f f-rt-n-");
  });
  it("will alert the user to only input words", function () {
    expect(wordPuzzle("425345532")).to.equal("Only works on words");
  });
});
