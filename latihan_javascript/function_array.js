function getSecondMax(arr) {

    const sortedArray = arr.sort((a, b) => b - a);
    const uniqueArray = [...new Set(sortedArray)];
  
    const secondMax = uniqueArray[1];
  
    return secondMax;
  }
  
  const arrayExample = [2, 10, 4, 2, 25];
  const result = getSecondMax(arrayExample);
  
  console.log(`Hasilnya adalah: ${result}`);
  