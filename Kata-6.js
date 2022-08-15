/* Write a function that:

    - Returns the coordinates of an available parking spot for a vehicle

    - It returns false if there is no available spot.

    - Our function receives an array of arrays representing parking spots,
      and a string with the type of vehicle looking for a parking spot.
*/

// Three kinds of vehicles: R (regular), S (small), and M (motorcycle)

// Regular cars only go into R spots, Small cars go into R and M spots, and Motorcycles go into R + M + S spots.


// Upper-case lettering means the spot is available, Lowercase lettering means it is unavailable.

// Our function should return an array with the coordinates of the spot as an [X,Y] pair. It doesn't matter which spot your function chooses to take if multiple exist.




const whereCanIPark = function (spots, vehicle) {

  let vehicleSpotFoundX = 0;
  let vehicleSpotFoundY = 0;

  if (vehicle === "regular") {
    for (let i = 0; i < spots.length; i++) {
      for (let j = 0; j < spots[i].length; j++) {
        if (spots[j][i] === "R") {
          vehicleSpotFoundY = j;
          vehicleSpotFoundX = i;
          return [vehicleSpotFoundX, vehicleSpotFoundY];
        }
      }
    }
    return false;
  }

  if (vehicle === "small") {
    for (let i = 0; i < spots.length; i++) {
      for (let j = 0; j < spots[i].length; j++) {
        if (spots[j][i] === "S" || spots[j][i] === "R") {
          vehicleSpotFoundY = j;
          vehicleSpotFoundX = i;
          return [vehicleSpotFoundX, vehicleSpotFoundY];
        }
      }
    }
    return false;
  }

  if (vehicle === "motorcycle") {
    for (let i = 0; i < spots.length; i++) {
      for (let j = 0; j < spots[i].length; j++) {
        if (spots[j][i] === "S" || spots[j][i] === "R" || spots[j][i] === "M") {
          vehicleSpotFoundY = j;
          vehicleSpotFoundX = i;
          return [vehicleSpotFoundX, vehicleSpotFoundY];
        }
      }
    }
    return false;
  }
};


