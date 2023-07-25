const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(titleCaseString);
};

function titleCaseString(str) {
  // List of words that should not be converted to title case (already properly capitalized).
  const excludedWords = ["OO", "API", "NaN", "JSONP?"];

  return str
    .split(' ')
    .map(word => {
      if (excludedWords.includes(word.toUpperCase())) {
        // If the word is in the excluded list, keep it as is.
        return word;
      } else {
        // Convert other words to title case.
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join(' ');
}

module.exports = titleCased;