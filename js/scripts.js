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
      findIndexOfMaxNumber(uniqueListOccurs, stableList);
     return uniqueList;
    }

    function findIndexOfMaxNumber(numberedList, wordList) {
      length1 = wordList.length;
      let max = length1 -1;
      let max2 = length1 -1;
      let max3 = length1 -1;
      numberedList.forEach(function(element, index) {
        console.log("Index: " + index);
        console.log("Here are currently most common: " + wordList[max] + "," + wordList[max2] + "," + wordList[max3]);
        if (parseInt(element) > parseInt(numberedList[max])) {
          console.log("Here are currently most common: " + wordList[max] + "," + wordList[max2] + "," + wordList[max3]);
          console.log("element: " + element + "index" + index);
          max3 = max2;
          max2 = max;
          max = index;
          console.log("Here are currently most common after1: " + wordList[max] + "," + wordList[max2] + "," + wordList[max3]);
        }
        else if (element <=parseInt(numberedList[max]) && element >= parseInt(numberedList[max2]) && element >= parseInt(numberedList[max3])) {
          console.log("Here are currently most common: " + wordList[max] + "," + wordList[max2] + "," + wordList[max3]);
          console.log("element: " + element + "index" + index);
          max3 = max2;
          max2 = index;
          console.log("Here are currently most common after2: " + wordList[max] + "," + wordList[max2] + "," + wordList[max3]);
        }
        else if (element <=parseInt(numberedList[max]) && element <= parseInt(numberedList[max2]) && element >=parseInt(numberedList[max3])) {
          console.log("Here are currently most common: " + wordList[max] + "," + wordList[max2] + "," + wordList[max3]);
          console.log("element: " + element + "index" + index);
          max3 = index;
          console.log("Here are currently most common after3: " + wordList[max] + "," + wordList[max2] + "," + wordList[max3]);
        }
        else if (element < max) {
        }
      })
        console.log("Here are the most common words " + wordList[max] + "," + wordList[max2] + "," + wordList[max3]); 
        return max, max2, max3;
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
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});