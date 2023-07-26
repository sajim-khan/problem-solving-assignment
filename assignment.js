//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

//Example Input: "hello world" Example Output: "dlrow olleh"

function reverseStr(string) {
  let reversedStr = ""
  const myStr = string.toString().toLowerCase();
  for (let i = string.length - 1; i >=0; i--){
    reversedStr+=myStr[i]
  }
  console.log(`Input: ${myStr} \nOutput: ${reversedStr} `);
}
//reverseStr("Hello World") //Output: dlrow olleh 




//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

//Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositiveNum(array) {
  let myArray = array.length;
  let sum = 0;
  let positiveArray = [];
  for (let i = 0; i < myArray; i++) {
    if (i % 2 === 0) {
      sum += array[i];
      positiveArray.push(array[i]);
    }
  }
  console.log(
    `Input Array: [${array}] \nPositive number is : ${positiveArray} \nSum of all positive numbers is : ${sum} `
  );
}
//sumOfPositiveNum([2, -5, 10, -3, 7]); //Output: 19



//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentElement(arr) {
  const frequency = {};
  let mostFrequentElement;
  let highestFrequency = 0;

  arr.forEach((element) => {
    frequency[element] = (frequency[element] || 0) + 1;

    if (frequency[element] > highestFrequency) {
      highestFrequency = frequency[element];
      mostFrequentElement = element;
    }
  });

  return mostFrequentElement;
}

const result = findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
console.log(`Most Frequent Element is : ${result}`); // Output: 3