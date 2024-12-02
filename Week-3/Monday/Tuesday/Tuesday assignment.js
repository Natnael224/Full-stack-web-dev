//task #1
var firstName = 'Natnael';
const age = 28;
var student = false;

console.log('first name :'+firstName)
console.log('age :'+age)
console.log('am i student? '+student);
//task #2
let person={
    firstname : 'Alex',
    age : 30,
    adress :{
            street : '1234st',
            city : 'Addis Ababa',
            postalcode : '1000',
    }
}
console.log('first name :'+person.firstname);
console.log('street :'+person.adress.street);
//task #3
let Array= ['apple', 'banana', 'orange', 'grape', 'pear'];
console.log('second item:'+Array[1]);
console.log('fourth item:'+Array[3]);
Array.push('pinapple');
console.log('recently added item:'+Array[5]);
Array[6]='Item listed here';
console.log('Most recently added item:' +Array[6]);
//task #4
function printNumbers(n) {
  for (let a = 1; a <= n; a++) {
      if (a % 3 === 0 && a % 5 === 0) {
          console.log("FizzBuzz");
      } else if (a % 3 === 0) {
          console.log("Fizz");
      } else if (a % 5 === 0) {
          console.log("Buzz");
      } else {
          console.log(a);
      }
  }
}
printNumbers(10);
//task #5
let Numbers= [ ];
console.log('first console log:', Numbers);
  for (let a = 1; a <= 20; a++) {
      if (a % 2 === 0 ) {
          Numbers.push(a);
      }      
  }
console.log('final console log:',Numbers);
//task #6
function findnumber() {
  const target = 20;
  const array = [1, 22, 13, 14, 85, 96, 67, 80, 97, 120, 19, 2, 3, 4, 15, 16, 6, 8, 9, 20, 44];

  for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
          console.log("Target found at index "+ [i]);
          break;
      } else if ((array[i] % 3) === 0) {
          continue;
      } else if (i === (array.length - 1) && array[i] != target) {
          console.log("Target not found");
          return;
      }
  }
}
findnumber();
//task #bonus
function printPattern(n) {
  for (let i = 1; i <= n; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
          row += '*';
      }
      console.log(row);
  }
}

printPattern(10);