// Utility Logic

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

//Business Logic
//Practice Word Counter
// Business Logic

    function wordCounter(text) {
      if (noInputtedWord(text)) {
        return 0;
      }
      let wordCount = 0;
      const wordArray = text.split(" ");
      wordArray.forEach(function(element) {
        if (!Number(element)) {
          wordCount++;
        }
      });
      return wordCount;
    }

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

    function wordList(text) {
      const textArray = text.split(" ");
      textArray.sort();
      let uniqueList = [];
      textArray.forEach(function(element, index) {
          if (uniqueList.indexOf(element) !== -1) {
          }
          else if (uniqueList.indexOf(element) === -1) {
            uniqueList.push(element);
          }
      });
      return uniqueList;
    }

   function createListOfOccurrences(uniqueList, passage, stableList) {
     let uniqueListOccurs = [];
      uniqueList.forEach(function(element, index) {
          uniqueListOccurs.push(numberOfOccurrencesInText(element, passage));
      })
      console.log(uniqueListOccurs);
      console.log(stableList);
      //findIndexOfMaxNumber(uniqueListOccurs, stableList);
     return uniqueListOccurs;
    }

    function findIndexOfMaxNumber(numberedList, wordList) {
      length1 = wordList.length;
      let max = length1 -1;
      let max2 = length1 -1;
      let max3 = length1 -1;
      numberedList.forEach(function(element, index) {
        if (parseInt(element) > parseInt(numberedList[max])) {
          max3 = max2;
          max2 = max;
          max = index;
        }
        else if (element <=parseInt(numberedList[max]) && element >= parseInt(numberedList[max2]) && element >= parseInt(numberedList[max3])) {
          max3 = max2;
          max2 = index;
        }
        else if (element <=parseInt(numberedList[max]) && element <= parseInt(numberedList[max2]) && element >=parseInt(numberedList[max3])) {
          max3 = index;
        }
        else if (element < max) {
        }
      })
        let mostCommonWords = [wordList[max], wordList[max2], wordList[max3]];
        return mostCommonWords;
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
    const wordList1 = wordList(passage);
    const uniqueListOccurs = createListOfOccurrences(wordList1, passage, wordList1);
    const mostCommonWords = findIndexOfMaxNumber(uniqueListOccurs, wordList1);
    const firstMostCommonWordsOccurs = numberOfOccurrencesInText(mostCommonWords[0], passage);
    const secondMostCommonWordsOccurs = numberOfOccurrencesInText(mostCommonWords[1], passage);
    const thirdMostCommonWordsOccurs = numberOfOccurrencesInText(mostCommonWords[2], passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#first-most-common-word").html(mostCommonWords[0]);
    $("#second-most-common-word").html(mostCommonWords[1]);
    $("#third-most-common-word").html(mostCommonWords[2]);
    $("#first-most-common-word-occurs").html(firstMostCommonWordsOccurs);
    $("#second-most-common-word-occurs").html(secondMostCommonWordsOccurs);
    $("#third-most-common-word-occurs").html(thirdMostCommonWordsOccurs);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});