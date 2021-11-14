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
        console.log("Here are the most common words again: " + mostCommonWords);
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
    const findIndexOfMaxNumber1 = findIndexOfMaxNumber(uniqueListOccurs, wordList1);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#first-most-common-word").html(findIndexOfMaxNumber1[0]);
    $("#second-most-common-word").html(findIndexOfMaxNumber1[1]);
    $("#third-most-common-word").html(findIndexOfMaxNumber1[2]);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});