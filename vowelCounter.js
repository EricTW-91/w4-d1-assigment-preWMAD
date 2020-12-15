// write a function that counts the number of vowels in a given string and returns that value
// one potential solution may use the charAt() method, but this isnt the only solution
// you may alsop find the .contains() method useful.
//another useful couple of methods could be .split and .join
const vowelCounter = function(data) {
    // Put your solution here
    let count = 0;

    for (i = 0; i < data.length; i++) {
      if (data[i].toLowerCase() === "a" || data[i].toLowerCase() === "e" || data[i].toLowerCase() === "i" || data[i].toLowerCase() === "o" || data[i].toLowerCase() === "u") {
        count++;
      }
    }

    return count;
};
  
  console.log(vowelCounter("orange"));
  // should return 3
  console.log(vowelCounter("Cornerstone"));
  // should return 4
  console.log(vowelCounter("Aeiou"));
  // should return 5