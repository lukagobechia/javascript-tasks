function reverseWord(string) {
    let result = [];
    let word = "";
    let i = 0;
    while (i <= string.length) {
      if (string[i] == " " || i == string.length) {
        if(string[i-1] != " ")
        result.push(word);
        word = "";
      } else word += string[i];
      i++;
    }
    let reversedString = "";
    for (let j = result.length - 1; j >= 0; j--)
      reversedString += result[j] + " ";
    return reversedString;
  }
  console.log(reverseWord("Hello       World   ")); // handles all the spaces
  