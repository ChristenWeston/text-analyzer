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
      if (text.trim().length === 0) {
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
    const text = "red.";
    const word = "Red";
    numberOfOccurrencesInText(word, text);

    wordCounter("       ");
    wordCounter("Hi hi there");
    wordCounter("hi 8 hi");
// A simpler option
//    function wordCount(text) {
//      return text.split(" ").length;
//    };