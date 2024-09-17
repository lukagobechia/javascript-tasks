function cleanSentence(string) {
  const regex = /[0-9]/g;
  let result;
  result = string.replace(regex, "");
  return result;
}

console.log(cleanSentence("This looks5 grea8t"));
