function abbreviate(string) {
    string = string.replace(/\s+/g, ' ').trim();
    
    let abbreviation = "";
    let words = string.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      let splitedWords = words[i].toUpperCase();
      abbreviation += splitedWords.charAt(0) + ".";
    }
    
    return abbreviation;
  }
  
  console.log(abbreviate("  hello world    everyone good morning  ")); 
  