// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const correctAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26) return false; //if there is no alphabet or alphabet is too short, return false
    let checkforDupes = new Set(alphabet); //use new Set to remove duplicates
    if ([...checkforDupes].length !== 26) return false; // return false if duplicate characters
 
    let result = "";
    let inputs = input.toLowerCase(); //ignore uppercase letters
    for(let i = 0; i < inputs.length; i++){
      if(encode){
        ind = correctAlphabet.indexOf(inputs[i]); //find index that matches given and original alphabet
        result += alphabet.charAt(ind);
        if(inputs[i].includes(" ")) result += inputs[i]; //if there is a space, push to result
      }
      else {
        ind = alphabet.indexOf(inputs[i]);
        result += correctAlphabet.charAt(ind);
        if(inputs[i].includes(" ")) result += inputs[i]; //if there is a space, push to result
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
