function countWords(inputWords) {

    return inputWords.reduce((obj, word) => {
        "use strict";
        obj[word] = ++obj[word] || 1;
        return obj;
    }, {});
}

module.exports = countWords