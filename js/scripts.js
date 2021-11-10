//Business Logic
//Practice Word Counter
      function wordCounter(word) {
        if (word.trim().length === 0) {
          return 0;
        }
        let wordCount = 0;
        const wordArray = word.split(" ");
        wordArray.forEach(function(element) {
          if (!Number(element)) {
            wordCount++;
          }
        });
        console.log(wordCount);
        return wordCount;
    };

    function numberOfOccurrencesInText(word, text) {
      if ((text.trim().length === 0) || (word.trim().length === 0)) {
        return 0;
      }
      const wordArray = text.split(" ");
      let wordCount = 0;
      wordArray.forEach(function(element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
          wordCount++;
        }
      });
      console.log("This is the word count for Number Of Occurences in Text" + wordCount);
      return wordCount;
    }

    function includesRarestLetter(word) {
      if (word.toLowerCase().includes("q")) {
        console.log("true");
        return true;
      }
      console.log("false");
      return false;
    }
    const sentenceWithQTest = "Here is a word with it quiet";
    const text = "red.";
    const word = "Red";
    numberOfOccurrencesInText(word, text);
    includesRarestLetter(sentenceWithQTest);

    wordCounter("       ");
    wordCounter("Hi hi there");
    wordCounter("hi 8 hi");

    //UI Logic
$(document).ready(function() {
  $("form#word-counter").submit(function(event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});
// A simpler option
//    function wordCount(text) {
//      return text.split(" ").length;
//    };