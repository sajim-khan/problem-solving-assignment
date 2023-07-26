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
reverseStr("Hello World") //Output: dlrow olleh 