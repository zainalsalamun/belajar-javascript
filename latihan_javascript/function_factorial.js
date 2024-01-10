function getFactorial(number) {
    
    if (number === 0 || number === 1) {
      return 1;
    } else {

      return number * getFactorial(number - 1);
    }
  }
  

  let bilangan = 4;
  let hasilFaktorial = getFactorial(bilangan);
  

  console.log(`${bilangan}! = ${hasilFaktorial}`);
  