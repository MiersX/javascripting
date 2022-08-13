
/*
var laugh = function (num) {
  let sound = "";
  for (let i = 1; i <= num; i++) {
      sound = sound + "ha"
  }
  return sound;
  }
*/

/*
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function (num) {
  let sound = "";
  for (let i = 0; i < num; i++) {
      sound = sound + "ha"
  }
  return sound;
  })
*/


/*

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Reso Restaurant', 50, 'restaurant']
];

// chooseStations(stations);
/* Expected output
['Bright Lights Elementary', 'Moose Mountain Community Centre']
*/



/*
function chooseStations (stations) {
  let goodStations = [];
  for (const element of stations) {
    if ((element[1] >= 20) && (element[2] === "school" || element[2] === "community centre")) {
      goodStations.push(element[0]);
    }
  } return goodStations; 
}
console.log(chooseStations(stations));
*/





//const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  



// Parade begins at 0.0

// Expected output = [-1, 4]

/*
const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
for (const element of moves) {
  if (element === "north") {
    y = y + 1;
  } else if (element === "south") {
    y = y - 1;
  } else if (element === "east") {
    x = x + 1;
  } else if (element === "west") {
    x = x - 1;
  }
} 
return [x, y]
}
*/ 
/*

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (const element of moves) {
    if (element === "north") {
      y = y + 1;
    } else if (element === "south") {
      y = y - 1;
    } else if (element === "east") {
      x = x + 1;
    } else if (element === "west") {
      x = x - 1;
    }
  }
  return [x, y];
};
*/
/*



function ageCalculator (name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/


/* 
function howManyHundreds (num) {
  if(num < 100) {
    return 0;
  } else if (num % 100 === 0) {
    return (num / 100);
  } else if (num % 100 > 0) {
    return Math.floor(num / 100);
  }
}
*/

/*
function calculateRectangleArea(length, width) {
  if (length > 0 && width > 0) {
    return length * width;
  }
}

function calculateTriangleArea(base, height) {
  if (base > 0 && height > 0) {
    return base * height * (1 / 2);
  }
}

function calculateCircleArea(radius) {
  if (radius > 0) {
    return Math.PI * (radius * radius);
  }
}
*/


/*
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(4, 0, "Purple");
console.log(rainbow);
*/

/* 
function hasEnoughPlayers (team) {
    if (team.length >= 7) {
        return true
}
}
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

*/
/*

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(value, index) {
    if (value % 3 === 0) {
        test[index] = test[index] + 100
    }
}
)
console.log(test);

*/

/*

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function(element) {
  let x = element * (0.15) + element;
  return Number(x.toFixed(2));
 })
console.log(totals);



Other solution Below:

var totals = bills.map(function (element) {
    element *= 1.15;
    element = element.toFixed(2);
    element = Number(element);

    return element;
});

*/






/*

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];


for (i = 0; i < numbers.length; i++) {
  for (y = 0; y < numbers[i].length; y++) {
    if (numbers[i][y] % 2 === 0) {
      numbers[i][y] = "even";
    } else if (numbers[i][y] % 2 > 0) {
      numbers[i][y] = "odd"
    }
  }
}



*/
/*

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:


let i = 0

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i ++;
}

for (let i = 0; i < ingredients.length; i++ ) {
  console.log(ingredients[i]);
}

for (let i = ingredients.length -1; i >=0; i-- ) {
  console.log(ingredients[i]);
}
*


/*
let output = [];

function range (start, end, step) {
  for (let i = start; i <= end; i += step) {
   output.push(i);
  } console.log(output);
}


console.log(range(-5, 2, 3))
*/

/*

function range (start, end, step) {
  let output = [];
  let sad = [];

  if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number' || start > end || step <= 0) {
    return sad;
  }     
  for (let i = start; i <= end; i += step) {
   output.push(i);
  } return output;
}
console.log(range(0, 5, 1));
*/

/*
function backwards (array, value) {
  for (let i = array.length -1; i >= 0; i --) {
       if (value === array[i]) {
    console.log(array[i])
   }
  }
}

backwards([0, 1, 2, 3, 4], 2);
*/

/*
function backwards (array, value) {
  for (let i = array.length -1; i >= 0; i --) {
       if (value === array[i]) {
    console.log(array[i])
   }
  }
}

backwards([0, 1, 2, 3, 4], 2);


*/

/*

function lastIndexOf (array, value) {
 
   let indexPosition = -1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (value === array[i]) {
      indexPosition = i;
      break;
    } 
  } return indexPosition
}



console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3))
console.log(lastIndexOf([ 5, 5, 5 ], 5))
console.log(lastIndexOf([], 3))


*/

/*

for (let i = array.length - 1; i >= 0; i--) {
  if (array[i] === value) {
    return array[i];
  } else if (array[i] !== value) {
    return -1;
  }
}
*/




/*

function concat (array1, array2) {
  let combinedArray = array1.concat(array2);
  return combinedArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]))
console.log(concat([], [ 9, 7, 2 ]))
console.log(concat([ 5, 10 ], []))




*/

/*

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
   printAccountSummary: function() {
        return "Welcome!" + "\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent +"%.";
        
    }
}

console.log(savingsAccount.printAccountSummary());

*/
/*

let facebookProfile = {
  name: "Jeff",
  friends: 420,
  messages: ["lol", "Let us go", "Chungus"],
  postMessage: function(message) {
      facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
      facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
      facebookProfile.friends += 1;
  },
  removeFriend: function() {
      facebookProfile.friends -= 1;
  }
}
*/



/*




const smartGarbage = function (trash, bins) {
  
  if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }
return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

  /*
  let bin = {
    waste: 0,
    recycling: 0,
    compost: 0
  };
*/

/*

let carList = [];

const carPassing = function (cars, speed)


*/
/*

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = "plumpness";







const judgeVegetable = function (vegetables, metric) {

  let winningVegetable = 0;
  let nameOfOwner = "";



  vegetables.forEach(vegetable => {
    for (const aspect in vegetable) {
      if (metric === `${aspect}`) {
        if (vegetable[metric] > winningVegetable) {
          winningVegetable = vegetable[metric];
          nameOfOwner = vegetable.submitter
        }
      }
    }
  })
return nameOfOwner
}



 console.log(judgeVegetable(vegetables, metric));


*/












/*

const judgeVegetable1 = function (vegetables, metric) {
  
  
  
  vegetables.forEach(element => {
    for (const key in element) {
                 if (metric === `${key}`) {
                  console.log(`${element[key]}`)
                }
              }
            }
  )
      }
 */

/*



      const cars = [
        {
          time: 1568329654807,
          speed: 40,
        },
        {
          time: 1568329821632,
          speed: 42,
        },
        {
          time: 1568331115463,
          speed: 35
        }
      ]
      
      const speed = 38
      
     */

/*

function carPassing(cars, speed) {
  const car = {
    time: Date.now(),
    speed: speed,
  };
  cars.push(car);
  return cars;
}
 carPassing(cars, speed)


*/








