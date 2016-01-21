var wordPuzzle = (function(texts) {
  var puzzleOutput = "";
  var vowels = ["a","e","i","o","u"];
  var textSplit = texts.split(" ");

  textSplit.forEach(function(text) {
      var replaced = text.replace(/vowels/gi, "-");
      puzzleOutput.push(replaced);
  })
  return puzzleOutput;
});
