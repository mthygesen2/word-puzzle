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
  var output = wordPuzzle(answer);
    $(".output").text(output);

    event.preventDefault();
  });
});
