// function will take in an array, and add the two biggest numbers in the array

const addLargestNumbers = function(data) {
    // Put your solution here
    if (data.length < 2) {

      return "Not enough items.";

    } else if (data.length === 2) {

      return data[0] + data[1];

    } else {

      let arr = data;
      let temp = 0;
      let sum = 0;
      let index = 0;

      for(c = 1; c <= 2; c++){
        for (i = 0; i < arr.length; i++) {
          if (arr[i] > temp) {
            temp = arr[i];
            index = i;
          }
        }
        sum += temp;
        temp = 0;
        arr.splice(index, 1);
      }
      
      return sum;




      // let numOne = 0; 
      // let numTwo = 0;

      // for (i = 0; i < data.length; i++) {
      //   if (data[i] > numOne) {
      //     numOne = data[i];
      //   }
      // }

      // for (i = 0; i < data.length; i++) {
      //   if (data[i] > numTwo && data[i] < numOne) {
      //     numTwo = data[i];
      //   }
      // }

      // return numOne + numTwo;

    }
  };
  
  console.log(addLargestNumbers([1, 10]));
  // should return 11
  console.log(addLargestNumbers([1, 2, 3]));
  // should return 5
  console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
  // should return 126