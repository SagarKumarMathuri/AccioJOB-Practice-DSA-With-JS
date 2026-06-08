// Printing Messages in Different Languages

// For JavaScript:
// console.log("Hello, World.");
// console.log("Hello, JavaScript.")

// // For Java:
// System.out.println("Hello, World.");
// System.out.println("Hello, JavaScript.");


// For C++:

// cout<<"Hello, World.\n";
// cout<<"Hello, JavaScript.";


// Printing a Concatenated String

// console.log(`My num is ${10}`)

// JavaScript Float Variable Reassignment
//  let a = 10.45;
    // a = 20.55;
    // console.log(a)


// Basic Variable Addition

// let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log(c)

// Quotient and Remainder Calculation
// let a = 1042;
//     let b = 7;
//     let quo = Math.floor(a/b);
//     let rem = a%b;
// console.log(quo , rem)

// Multiplication Table Generator for a Given Number

// var input = 8;
// for (var i = 1; i <= 10; i++) {
//     console.log(`${input} x ${i} = ${input * i}`);
// }

// Circle Area and Perimeter Calculation
//  let radius = 3.14
//  let p = 2 * 3 * radius;
//   let a = 3 * (radius*radius);
//   console.log(a)
//   console.log(p)


// Basic Arithmetic Operations
//  let a = 12 , b = 12;
//  let sum = a+b;
//   let diff = a-b;
//   let prod = a*b;
//   let quo = (Math.floor(a/b));
//   let rem = a%b;

//   console.log(sum);
//   console.log(diff);
//   console.log(prod);
//   console.log(quo);
//   console.log(rem);

// Temperature Conversion
// let tempInCelsius = 23
// console.log((tempInCelsius* (9/5)) + 32)

// Celsius to Fahrenheit 2
// let C  = 23;
// let celsius = parseFloat(C);
//   let fahrenheit = (celsius * 1.8) + 32;
//   console.log(fahrenheit.toFixed(6)); 

// Age Condition Check
// let n= 12;
//  let nut = parseInt(n);

//   switch (nut) {
//     case 28:
//       console.log("i am young");
//       break;
//     default:
//       console.log("i am not young");
//   }

// Number Importance Classification

// let N = 23;
//   if(N<30){
//      console.log("less important")
//   }else{
//     console.log("more important")
//   }
//   Number Comparison
// let n = 2;
// if(n>1){
//     console.log("You entered more")
//   }else{
//     console.log("You entered less")
//   }

// Divisibility Check
// let n = 24;
//  if(n%6==0){
//     console.log("Divisible")
//   }else{
//     console.log("Not divisible")
//   }

// Number of Days
// let month = 5;
// const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
//   const monthIndex = month - 1;
//   if(monthIndex >=0 && monthIndex<=11){
//     console.log(daysInMonth[monthIndex]);
//   }else{
//     console.log('Invalid month')
//   }
  

// 1. Print Numbers from 1 to N
// let n = 15;
// for(let i = 0; i < n; i++ ){
//   console.log(i)
// }

// 2. Print Numbers from N to 1 without changing the loop condition of above question

// let num = 13;
// for(let i = 1; i <= num; i++){
//   console.log(num - i+1);
// }

// 3. Print All Even Numbers from 1 to N

// let n = 12;
// for(let i = 1 ; i <= n; i++){
//   if(i%2==0){
//     console.log(i);
//   }
// }

// 4. Sum of First N Natural Numbers

// let n = 12;

// let sum = 0;

// for(let i = 1; i < n; i++){
//   sum+=i
// }
// console.log(sum);


// Optimized Solution

// let sum = (n * (n + 1))/2
// console.log(sum);


// . Print Right-Angled Star Triangle

// const row = 5;
// for(let i = 1; i <= row; i++){
//   let str = ''

//   for(let j = 1; j<= i; j++){
//     str += "*";
//   }
//   console.log(str);
  
// }

// . Print Right-Angled Star Triangle
 
// const row = 5;
// for(let i = row; i >= 1; i--){
//   str = "";
//   for(let j = i; j >= 1; j--){
//     str += "*"
//   }
//   console.log(str);
// }


// Print Pyramid Pattern

// const row = 5;

// for(let i=1; i < 2 * row-1; i+=2 ){
//   let str = ""
//   const currRow = (i + 1) / 2

//   for(let j = 1 ; j <= row + currRow -1 ; j++){
//     if(j <= row - currRow){
//       str += " "
//     }else {
//       str += "*"
//     }
//   }
//   console.log(str);
  
// }

// Leap Year 
let year = 1900
if((year % 4===0) && (year % 100 != 0) || (year % 400 === 0)){
    console.log(1)
  }else{
    console.log(0)
}


//  Student Grade Classification
// let n = 82
// if(n > 90){
//   console.log("excellent");
// }else if((n > 80) && (n <= 90)){
//   console.log("Good");
// }
// else if((n > 70) && (n <= 80)){
//   console.log("fair");
// }
// else if((n > 60 && (n <= 70))){
//   console.log("Meets Expectations");
// }else if(n <= 60){
//   console.log("Below Expectations");
// }

// Odd or Simple Integer Pair
// let a = 6
// if(a%2!==0){
//     console.log("Odd");
    
// }else{
//     console.log("Even");  
// }


// Sum of Digits
// let n = 3445
// let sum = 0;
// while (n>0) {
//     sum += n % 10;
//     n = Math.floor(n/10)
// }
// console.log(sum);


// Check Prime
// function isPrime(num){
//   if(num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//         return false
//     }
//   }
//   return true;
// }
// console.log(isPrime(7));

// Reverse Integer Digits

// let reverse = 0;
// let num = 1234;

// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(reverse);

// Greatest Common Divisor of Two Numbers

// function gcd(a,b){
//   while (b !== 0){
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return Math.abs(a);
// }
// console.log(gcd(48,18));

// // Calculate Power Without Built-in Method

// function power(base, exponent) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++){
//     result *= base;
//   }
//   return result;
// }
// console.log(power(2,3)); 


// N Stars
