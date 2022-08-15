


const urlEncode = function (text) {

  const condensedString = text.trim()
  let newString = "";

  for (let i = 0; i < condensedString.length; i++) {
    if (condensedString[i] !== " ") {
      newString += condensedString[i];
    };
    if (condensedString[i] === " ") {
      newString += "%20";
    }
  }
  return newString;
};





console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("       blue is greener than purple for sure"));


/*

Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/







