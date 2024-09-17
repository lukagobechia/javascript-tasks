function repeatChar(string) {
    let newString = '';
    for(let i = 0; i <= string.length - 1; i++){
        newString += string[i] + string[i];
    }
  return newString;
}

console.log(repeatChar("HellO World"));
