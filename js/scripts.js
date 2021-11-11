// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

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
        ;
        return wordCount;
    };

    function numberOfOccurrencesInText(word, text) {
      if (noInputtedWord(word,text)) {
        return 0;
      }
      const wordArray = text.split(" ");
      let wordCount = 0;
      wordArray.forEach(function(element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
          wordCount++;
        }
     //   console.log(word + ":" + wordCount)
      });
      return wordCount;
    }
//In progress or use first instance of word below
    function uniqueArray(text) {
      const passage = text;
      const wordArray = text.split(" ");
      //Found in MDN Docs under array.protype.reduce()
      let noDuplicates = Array.from(new Set(wordArray));
      noDuplicates.forEach(function(element) {
        numberOfOccurrencesInText(element, passage);
      })
    }

    function firstInstanceOfWord(word, text) {
      const textArray = text.split(" ");
      let position = -1;
      textArray.forEach(function(element, index) {
        console.log(index);
        if ((word === element) && (position === -1)) {
          position = index;
        }
        console.log("Element " + element);
        console.log("word: " + word);
      });
      console.log("Position:" + position);
      return position;
    }

    function wordList(text) {
      const textArray = text.split(" ");
      let position = 0;
      let uniqueList = [];
      textArray.forEach(function(element, index) {
        uniqueList.forEach(function(element2, index){
        if (element === uniqueList[position]) {
          console.log("Duplicate word: " + element);
          position++;
        }
        if (element !== uniqueList[position]) {
          uniqueList[position] = element;
          console.log("Unique word: " + element);
          position++;
        }
      });
      return uniqueList;
    }

    function includesRarestLetter(word) {
      if (word.toLowerCase().includes("q")) {
        return true;
      }
      return false;
    }

    function boldPassage(word, text) {
      let htmlString = "<p>";
      let textArray = text.split(" ");
      textArray.forEach(function(element, index) {
        if (word === element) {
          htmlString = htmlString.concat("<b>" + element + "</b>");
        } else {
          htmlString = htmlString.concat(element);
        }
        if (index !== (textArray.length -1)) {
          htmlString = htmlString.concat(" ");
        }
      });
      return htmlString + "</p>";
    }

    //UI Logic
$(document).ready(function() {
  $("form#word-counter").submit(function(event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
 //   const unique = uniqueArray(passage);
    const wordList1 = wordList(passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});