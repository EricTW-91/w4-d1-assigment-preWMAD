// write a function that returns the sum of all the numbers that are either 'even', or 'odd'
// if not enough numbers return "Improper Input"

const conditionalAdding = function(values, condition) {
    // Your code here
    let sum = 0;
    if (values.length === 0) {
      return "improper input";
    } else {
      for (i = 0; i < values.length; i++) {
        if (condition === "even" && values[i] % 2 === 0) {
          sum += values[i];
        } else if (condition === "odd" && values[i] % 2 !== 0) {
          sum += values[i];
        }
      }
      return sum;
    }
  };
  
  console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
  // should return 6
  console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
  // should return 9
  console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
  // should return 144
  console.log(conditionalAdding([], "odd"));
  // should return "improper input"