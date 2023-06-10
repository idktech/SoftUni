function charsInRange(firstChar, secondChar) {
  let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

  let charArr = [];

  for (let i = startChar + 1; i < endChar; i++) {
    charArr.push(String.fromCharCode(i));
  }
  return charArr.join(" ");
}

charsInRange("a", "d");
