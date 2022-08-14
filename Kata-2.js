
/* Create a function that will be give an array of numbers and a condition, in this case odd or even.

 -  Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

 -  Use some sort of looping, DO NOT use Array.prototype.filter()

*/




const conditionalSum = function(values, condition) {
  
  let sumOfConditionNumbers = 0;
   
   
  for (let i = 0; i < values.length; i++) {
    if (condition === "even") {
      if (values[i] % 2 === 0) {
        sumOfConditionNumbers += values[i];
      }
    }
    if (condition === "odd") {
      if (values[i] % 2 > 0) {
        sumOfConditionNumbers += values[i];
      }
    }
  }
return sumOfConditionNumbers;
};




console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


// Expected Output
6
9
144
0