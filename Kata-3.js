/* We are looking to count the number of vowels that appear in a given string. 

  - "a" , "e", "i", "o", "u"
  
  */



  const numberOfVowels = function(data) {
    
    let totalVowelCount = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
        totalVowelCount += 1;
      }
    }
return totalVowelCount
};
  

  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));



3
5
5