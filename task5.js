function randomString(length) {
  let randomString = "";
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  for (let i = 0; i < length; i++) {
    let randomNum = Math.random() * string.length;
    randomString +=string.charAt(Math.round(randomNum)) 
  }

  return randomString;
}

console.log(randomString(10));
