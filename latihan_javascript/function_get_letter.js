function getLetter(s) {

    const firstChar = s[0];
  
    let result;
    switch (firstChar) {
      case 'a':
      case 'i':
      case 'u':
      case 'e':
      case 'o':
        result = 'A';
        break;
      case 'b':
      case 'c':
      case 'd':
      case 'f':
      case 'g':
        result = 'B';
        break;
      case 'h':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
        result = 'C';
        break;
      default:
        result = 'D';
    }
  

    return result;
  }
  

  let inputString = "apple";
  let result = getLetter(inputString);
  

  console.log(`Untuk string "${inputString}", hasilnya adalah: ${result}`);
  