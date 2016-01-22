var wordPuzzle = (function(texts) {
  var vowels = /a|e|o|u|i/gi;
  if(texts > 0) {
    return "Only works on words";
  } else {
  return texts.replace(vowels, '-');
}
});

$(document).ready(function(){
  $("form").submit(function(event) {
  var answer = $("input#userInput").val();
  var vowelsOut = wordPuzzle(answer);
    $(".puzzleform").toggle();
    $(".unsolved").toggle();
    $(".output").text(vowelsOut);

    event.preventDefault();
  });
});
