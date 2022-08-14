const sumLargestNumbers = function(data) {
  let largestNumber = 0;
  let secondLargestNumber = 0;
  
  data.forEach(number => {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  )    
  for (let i = 0; i < data.length; i++) {
    if (data[i] > secondLargestNumber && data[i] < largestNumber) {
      secondLargestNumber = data[i];
    }
  } 
    
  return largestNumber + secondLargestNumber
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


11
5
126