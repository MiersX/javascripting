/*  Given a list of instructors.
      - Determine which has the longest name
*/






const instructorWithLongestName = function (instructors) {

  let longestNamedPerson = "";
  let longestName = '';

  instructors.forEach(instructor => {
    for (const descriptor in instructor) {
      if (`${descriptor}` === "name") {
        if (`${instructor[descriptor]}`.length > longestName.length) {
          longestName = `${instructor[descriptor]}`;
          longestNamedPerson = instructor;
        }
      }
    }
  })
  return longestNamedPerson;
};















console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));


/* Expected Output:

{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}

*/