function reverseString(str) {
  // type your code here
  //if it's a empty string, return empty
  if (str.length === 0){
    return ""
  } else {
  /*otherwise reversString function recurses taking rest of the current string except the first letter as parameter, 
  then add back the first letter of current string to the back of returned result. */
    return reverseString(str.slice(1)) + str[0]    
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: '");
  console.log("=>", reverseString(""));

  console.log("");

  console.log("Expecting: 'oof'");
  console.log("=>", reverseString("foo"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
