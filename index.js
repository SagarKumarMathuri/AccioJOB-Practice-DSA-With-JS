// Printing Messages in Different Languages

// ajjdjfdf;
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
let year = 1900;
if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
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

// let h = "";
// for(let i = 0; i < 5; i++){
//   h += "* ";
// }
// console.log(h);
// for(let i = 0; i < 5; i++){
//   console.log("* ");
// }

// Sum of Natural Numbers
// let n = 3;
// let sum = 0;
// for(let i = 1; i <= n; i++){
//   sum += i;
// }
// console.log(sum);

// Factorial with loop

// let fact = 1;
// let n = 5;

// for(let i = 1; i <= n; i++){
//   fact *= i;
// }
// console.log(fact);

//Sum of Even Numbers

// let n = 12;
// let sum = 0 ;
// for(let i = 1; i <= n; i++){
//   if(i%2==0){
//     sum += i;
//   }
// }
// console.log(sum);

// JavaScript Array Methods

// 1. JavaScript Array length

// let a = ["html", "css", "js", "react"];

// a.splice(0,3)
// console.log(a);

// console.log(a.length);
// let s = a.toString();
// console.log(a.join('|'));

// console.log(a.splice(1,3));

// let a = [20,30,40,50];
// a.splice(1,3);
// a.splice(1,2,3,4,5)

// let res = a.slice(1,4);
// console.log(res);
// console.log(a);

// const a = [1,2,3,4,5,6];

// let res = a.some((val) => val > 1);
// console.log(res);

// let a = [4,9,16, 25];

// let sub = a.map(geeks);

// function geeks() {
//     return a.map(Math.sqrt);
// }
// console.log(sub);

// Map

// const a = [1,4,9];

// const b = a.map(x => Math.sqrt(x) );

// console.log(b);

// let a = [2,5,6,3,8,9];

// let res = a.map((val, index)=>{
//     return { key: index, value: val * val}
// })

// console.log(res);

// Filter

// let a1 = [1,2,3,4,5,6];

// let a2 = a1.filter((num) => num > 1);

// console.log(a2);

// reduce

// let a = [80 , 30, 23, 20];

// let sub = a.reduce(geeks);

// function geeks(tot, num){
//     return tot - num;
// }
// console.log(sub);

// 2. Transform Strings

// const names = ["sagar", "rahul", "amit"];

// const result = names.map(name => name.toUpperCase());

// console.log(result);

// 3. Extract Properties from Objects

// const users = [
//     { id: 1, name: "sagar"},
//     { id: 2, name: "suraj"}
// ];

// const result = users.map(user => user.name);

// console.log(result);

// 4. Add Properties to Objects

// const users = [
//     { name: "sagar"},
//     {name: "smith"}
// ]

// const result = users.map(user => ({
//     ... user,
//     active: true
// }))

// console.log(result);

// 1. Find Largest Element

// function findlargest(arr){
//     let largest = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// console.log(findlargest([12,34,5,2,45]));

// Find Second Largest Element

// function secondLargest(arr){
//     let largest = -Infinity;
//     let second = -Infinity;

//     for(let num of arr){
//         if(num > largest){
//             second = largest;
//             largest = num;
//         }else if(num > second && num !== largest){
//             second = num;
//         }
//     }
//     return second;
// }

// console.log(secondLargest([10,20,2,43,89]));

// 3. Reverse Array

// function reverseArray(arr) {
//     let left = 0;
//     let right = arr.length-1;

//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr
// }

// console.log(reverseArray([1,2,3,4,6]));

// Move Zeros to End

// function moveZeros(arr) {
//     let count = 0;

//     for(let i= 0; i < arr.length; i++){
//         if (arr[i] !== 0) {
//             [arr[count], arr[i]] = [arr[i], arr[count]];
//             count++;
//         }
//     }
//     return arr;
// }
// console.log(moveZeros([2,3,0,50,0,4,0,2]));

// 5. Left Rotate Array by One

// function leftRotate(arr){
//     let first = arr[0];

//     for(let i = 1; i <arr.length; i++){
//         arr[i - 1] = arr[i];
//     }
//     arr[arr.length -1] = first;
//     return arr;
// }
// console.log(leftRotate([1,2,3,4]));

// 7. Remove Duplicates from Sorted Array

// function removeDuplicate(arr){
//     let res = 1;

//     for(let i = 1; i < arr.length; i++){
//         if (arr[i] !== arr[res - 1]) {
//             arr[res] = arr[i];
//             res++;
//         }
//     }
//     return arr.slice(0, res);
// }

// console.log(removeDuplicate([1,1,2,2,2,3,4,4,4]));

// Alternate elements of an array

// function getAlternate(arr) {
//     let res = [];

//     for(let i= 0; i < arr.length; i +=2){
//         res.push(arr[i]);
//     }
//     return res;
// }

// const arr = [10,20,30,40,50,60];
// const res = getAlternate(arr);
// console.log(res.join(" "));
// console.log(getAlternate(arr));

// Recursive Approach

// function getAlternatesRec(arr, idx, res){
//     if (idx < arr.length) {
//         res.push(arr[idx]);
//         getAlternatesRec(arr, idx + 2, res);
//     }
// }
// function getAlternates(arr) {
//     let res = [];
//     getAlternatesRec(arr, 0, res);
//     return res;
// }

// let arr = [10,20,30,40,50,60];
// console.log(getAlternates(arr));

// Find the sum of all elements in an array using recursion.

// function sum(arr, n) {
//     if(n === 0) return 0;

//     return arr[n-1] + sum(arr, n - 1);
// }
// console.log(sum([1,2,4,6], 4));

// 2. Find Maximum Element

// function maxElement(arr, n){
//     if (n === 1)  return arr[0];

//     return Math.max(arr[n-1], maxElement(arr, n-1));
// }

// console.log(maxElement([2,4,3,5,6,7,8],7));

// 3. Find Minimum Element

// function minElement(arr, n){
//     if(n === 1) return arr[0];

//     return Math.min(arr[n-1], minElement(arr, n-1));

// }
// console.log(minElement([2,4,5,6],4));

// 4. Reverse Array

// function reverseArray(arr, start, end){
//     if(start >= end) return arr;

//     [arr[start], arr[end]] = [arr[end], arr[start]];

//     return reverseArray(arr, start + 1, end -1);
// }

// console.log(reverseArray([1,2,4,5,6],0,4));

// 5. Check If Array Is Sorted

// function isSorted(arr, n){
//     if(n === 1) return true;

//     return arr[n-2] <= arr[n-1] && isSorted(arr, n-1);

// }
// console.log(isSorted([1,2,3,4,5],5));

// 6. Linear Search

// function linearSearch(arr, index, target){
//     if(index === arr.length) return -1;

//     if(arr[index] === target) return index;

//     return linearSearch(arr, index + 1, target);
// }
// console.log(linearSearch([10,20,30,40],0,30));

// 8. Product of Array Elements

// function product(arr, n){
//     if(n === 0) return 1;

//     return arr[n-1] * product(arr, n-1);
// }
// console.log(product([2,3,4],3));

// 9. Binary Search (Recursive)

// function binarySearch(arr, low, high, target){
//     if(low > high) return -1;

//     let mid = Math.floor((low + high)/2);

//     if(arr[mid] === target) return mid;

//     if(target < arr[mid]){
//         return binarySearch(arr, low, mid -1, target);
//     }
//     return binarySearch(arr, mid + 1, high, target)
// }
// console.log(binarySearch([1,2,3,4,5],0,4,4));

// 12. Print Array Recursively

// function printArray(arr, index){
//     if(index === arr.length) return ;

//     console.log(arr[index]);

//     printArray(arr, index + 1);

// }
// printArray([10,20,30,40],0)

// Print all subsets of an array.

// function subset(arr, index, curr){
//     if(index === arr.length){
//         console.log(curr);
//         return
//     }
//    subset(arr, index+1, curr);

//    subset(arr, index + 1, [...curr, arr[index]])
// }

// subset([1,2],0,[])

// 1. Print a Matrix

// function printMatrix(mat){
//     for(let i = 0; i < mat.length; i++){
//         for(let j = 0; j < mat[i].length; j++){
//             process.stdout.write(mat[i][j] + " ");
//         }
//         console.log();

//     }
// }
// printMatrix([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ])

// 2. Sum of All Elements

// function matrixSum(mat) {
//     let sum = 0;

//     for(let i = 0; i < mat.length; i++){
//         for(let j = 0; j < mat[i].length; j++){
//             sum += mat[i][j];
//         }
//     }
//     return sum;
// }
// console.log(matrixSum([
//     [1,2],
//     [3,4]
// ]));

// 3. Largest Element in Matrix

// function lagestElement(mat) {
//     let max = mat[0][0];

//     for(let i = 0; i < mat.length; i++){
//         for(let j = 0; j < mat[i].length; j++){
//             max = Math.max(max, mat[i][j]);
//         }
//     }
//     return max;
// }

// console.log(lagestElement([
//     [1,2,5],
//     [4,6,8]
// ]));

// 4. Row Sum

// function rowSums(mat){
//     for(let i = 0; i < mat.length; i++){
//         let sum = 0;

//         for(let j=0; j < mat[i].length; j++){
//             sum += mat[i][j];
//         }
//         console.log(sum);

//     }
// }

// rowSums([
//     [1,2,3],
//     [4,5,6]
// ])

// 5. Column Sum

// function colSums(mat) {

//      let rows = mat.length;
//     let cols = mat[0].length;

//     for(let j = 0; j < cols; j++){
//         let sum = 0;

//         for(let i = 0; i < rows; i++){
//             sum += mat[i][j];
//         }
//         console.log(sum);

//     }

// }

// colSums([
//     [1,2,3],
//     [4,5,6]
// ])

// Check Even or Odd

// function isEven(n){
//   let rem = n % 2;
//   if(rem == 0){
//     return true
//   }else{
//     return false;
//   }
// }
// console.log(isEven(5));


// Program for multiplication table

// function printTable(n){
//   for(let i = 1; i <= 10; i++){
//     console.log(n + " * " + i + " = " + n * i);
//   }
// }
// console.log(printTable(12));

// Program for sum of n natural numbers

// function findSu(n){
//   let sum = 0;

//   for(let i = 1; i <=n; i++){
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(findSu(5));

// [Alternative Approach] Using Recursion -O(n) and O(n) Space

// function findSum(n) {
//   if(n == 1) return 1;

//   return n + findSum(n - 1);

// }

// console.log(findSum(5));

// function findSum(n){
//   return n * (n + 1) / 2;
// }
// console.log(findSum(5));

// 1. Print Right-Angled Star Triangle

// const row = 5;
// for(let i = 1; i <= row; i++){
//   let str = "";
//    for(let j = 1; j <= i; j++){
//     str = str + "* "
//    }
//    console.log(str);
// }

// 2. Print Inverted Right-Angled Triangle

// const row = 5;

// for(let i = row; i >=1; i--){
//   let str = ''

//   for(let j = i; j >= 1; j--){
//     str = str + "* "
//   }
//   console.log(str);
// }

// 3. Print Pyramid Pattern

// let row = 5;

// for(let i = 1; i <= 2 * row -1; i+=2){
//   let str = ''
//   const currentRow = (i + 1) / 2

//   for(let j = 1; j <= row + currentRow -1; j++){
//     if(j <= row - currentRow) {
//       str += ' '
//     } else {
//       str += '*'
//     }
//   }
//   console.log(str);
  
// }

// 4. Print Inverted Pyramid Pattern

// const row = 81;

// for(let i = 2*row - 1; i >=1; i-=2){
//   let str = ''
//   const currentRow = (i + 1)/2

//   for(let j = 1; j <= row + currentRow -1; j++){
//     if(j <= row - currentRow){
//       str += ' '
//     } else {
//       str += '*'
//     }
//   }
//   console.log(str);
  
// }

// 5. Print Hollow Square Pattern

// const row = 6;

// for(let i = 1; i <=row; i++){
//   let str = ''

//   for(let j = 1; j <= row; j++){
//     if(i === 1 || i === row || j === 1 || j === row){
//       str = str + "*"
//     } else {
//       str = str + ' '
//     }
//   }
//   console.log(str);
  
// }

// 6. Print Hollow Pyramid Pattern

// const row = 5;

// for(let i = 1; i <= 2 * row - 1; i+=2){
//   let str = ''
//   const currentRow = (i + 1) /2

//   for(let j = 1; j <= row + currentRow - 1; j++){
//     if(j <= row - currentRow || j > row - currentRow + 1 && j < row + currentRow - 1 && i !== 2*row -1){
//       str += ' '
//     } else {
//       str += '*'
//     }
//   }
//   console.log(str);
  
// }


// 7. Print Alternating Binary Triangle

// const row = 5

// for(let i = 1; i <= row; i++){
//   let str = ''

//   for(let j = 1; j <= i; j++){
//     str = str + (i % 2 === 1 ? j % 2 : (j + 1) % 2)
//   }
//   console.log(str);
  
// }

// Split Number into Digits

// let n = 12345;
// let arr = [];

// while(n > 0){
//   const lastDigit = Math.floor(n % 10);
//   arr.push(lastDigit);
//   n = Math.floor(n/10);
// }
// arr.reverse()
// console.log(arr);

// Remove the Decimal Point Mathematically

// Input: N = 12.34
// Output: 1234
// ✨ Do not use string operations.

// let n = 12.34;
// function removeDecimalPoint(n) {
//   while(n%1 !== 0){
//     n = Number((n*10).toFixed(10));
//   }
//   return Math.floor(n);
// }

// console.log(removeDecimalPoint(n));

// Separate Whole and Fractional Parts of a Number
//  Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method.

// const n = 5.75;

// function seperateByDecimail(n){
//   let whole = Math.floor(n)
//   let fraction = Number((n - whole).toFixed(10));
//   return { whole, fraction};
// }

// console.log(seperateByDecimail(n));

// Generate a Decimal Number from Whole and Fractional Digits

// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
// ✨ Form the number mathematically by combining the digits from both arrays using powers of 10.

// function generateWholeNumber(arr){
//   const n = arr.length;
//   let whole = 0;
//   for(let i = 0; i < n; i++){
//     whole = 10 * whole + arr[i];
//   }
//   return whole;
// }
// function generatefraction(arr){
//   const n = arr.length;
//   let whole = 0;
//   let divide = 1;
//   for(let i = 0; i < n; i++){
//     whole = 10 * whole + arr[i];
//     divide *= 10;
//   }
//   return  whole / divide;
// }
// console.log("Whole :" + generateWholeNumber([1,2]));
// console.log("Fraction :" + generatefraction([1,2]));


// 1. Split Number into Digits

// function splitIntoDigit(num){
//   const digits = []
//   while (num > 0) {
//     digits.unshift(num % 10)
//     num = Math.floor(num / 10)
//   }
//   return digits
// }

// console.log(splitIntoDigit(1234));

// 2. Reverse a Number

// function reverseDigit(num){
//   const digits = []
//   while(num > 0){
//     digits.unshift(num % 10)
//     num = Math.floor(num / 10)
//   }
//   let reveredNumber = 0
//   for(let i = 0; i < digits.length; i++){
//     reveredNumber += digits[i] * 10 ** i
//   }
//   return reveredNumber
// }
// console.log(reverseDigit(1234));

// 3. Remove the Decimal Point Mathematically

// function removeDecimal(num){
//   while(num !== Math.floor(num)){
//     num = num * 10
//   }
//   return num
// }
// console.log(removeDecimal(123.5));

// 4. Separate Whole and Fractional Parts of a Number

// function separateParts(num){
//   const fractionPart = Number((num %1).toFixed(10))
//   const wholePart = Number((num - fractionPart).toFixed(10))
//   return {wholePart, fractionPart}
// }

// console.log(separateParts(12.45));


// Day-4b_digits-and-numbers
// 5. Generate a Decimal Number from Whole and Fractional Digits


// function generateNumberFromWholeAndFractionalDigit(wholeDigits, fractionalDigits){
//   let wholePart = 0;
//   let fractionPart = 0;

//   for(let i = 0; i < wholeDigits.length; i++){
//     wholePart += wholeDigits[i] * 10 ** (wholeDigits.length - i -1)
//   }
//   for(let i = 0; i < fractionalDigits.length; i++){
//     fractionPart += fractionalDigits[i] * 10 ** -(i + 1)
//   }

//   return wholePart + Number(fractionPart.toFixed(10))
// }

// console.log(generateNumberFromWholeAndFractionalDigit([1,2],[3,4]));


// 6. Check if a Number is a Palindrome
// function isPalindrome(num){
//   const originalNumber = num;
//   const digits = []
//   while(num > 0){
//     digits.unshift(num)
//   }
// }

// Alternate elements of an array

// function getAlternates(arr){
//   let res = [];

//   for(let i = 0; i < arr.length; i =+ 2){
//     res.push(arr[i]);
//   }
//   return res;
// }

// const arr = [10,15,20,25,30,35];
// console.log(res.join(" "));



// Iterate JavaScript Program to print alternate elements
// of the array

// function getAlternates(arr) {
//     let res = [];
    
//     // Iterate over all alternate elements
//     for (let i = 0; i < arr.length; i += 2) {
//         res.push(arr[i]);
//     }
//     return res;
// }


// // Driver Code
// const arr = [10, 20, 30, 40, 50];
// const res = getAlternates(arr);
// console.log(res.join(" "));


// Recursive Approach

// function getAlternatesRec(arr, idx, res){
//   if(idx < arr.length) {
//     res.push(arr[idx]);
//     getAlternatesRec(arr, idx + 2, res);
//   }
// }

// function getAlternates(arr){
//   let res = [];
//   getAlternatesRec(arr, 0, res);
//   return res;
// }

// let arr = [10, 20, 30, 40, 50];
// let res = getAlternates(arr);
// console.log(res.join(" "));


// Leaders in an array


// function leader(arr) {
//   const res = [];
//   const n = arr.length;

//   for(let i = 0; i < n; i++){
//     let j;
//     for(j = i + 1; j < n; j++){
//       if(arr[i] < arr[j])
//         break
//     }
//     if(j === n)
//       res.push(arr[i]);
//   }
//   return res;
// }

// const arr = [16, 17, 4, 3, 5, 2];
// const result = leader(arr);

// console.log(result.join(" "));


// Check if an array is subset of another array

function isSubset(a,b){
    let m = a.length, n = b.length;

    for(let i = 0; i < n; i++){
        let found = false;

        for(let j = 0; j < m; j++){
            if(b[i] === a[j]){
                found = true;
                a[j] = -1;
                break;
            }
        }
        if(!found)
            return false;
    }
    return true;
}

const a = [ 11, 1, 13, 21, 3, 7 ];
const b = [ 11, 3, 7, 1 ];

if (isSubset(a, b)) {
    console.log("true");
}
else {
    console.log("false");
}

// [Better Approach] Using Sorting and Two Pointer - O(m log m + n log n) Time and O(1) space



















// Staircase

// function staircase(n){
//   for(let i = 1; i <= n ; i++){
//     let space = " ".repeat(n - i);
//     let star = "*".repeat(i);
//     console.log(space + star);
//   }
// }
// staircase(5)

// Star Pyramid Creation

// const n = 5;

// for(let i=1; i <= n; i++){
//   let space = " ".repeat(n-i)
//   let star = ("* ".repeat(i)).trim()
//   console.log(space + star);
// }

// Right Angle Triangle Stars

// let n = 5;

// for(let i =1; i<=n; i++){
//     console.log("* ".repeat(i));
// }

// Descending Number Pattern

// let n = 5;

// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j=i; j>=1; j--){
//         row += j;
//     }
//     console.log(row);
// }

// Alphabet Pattern Printing
// let n = 5;
// for(let i = 0; i < n; i++){
//     let char = String.fromCharCode(65 + i);
//     console.log(char.repeat(i+1));
// }

// Prime Numbers Range
// let num = 11
// function isPrime(num){
//     if (num < 2) return false;

//     for(let i =2 ; i*i<num; i++){
//         if(num % i === 0) return false;
//     }

//     return true
// }
// for(let i=1; i<=num; i++){
//     if (isPrime(i)) {
//         console.log(i);

//     }
// }

// Print Continuous Character Pattern

// let n = 5;

// for(let i = 0; i < n; i++) {
//     let line = "";

//     for(let j=0; j <= i; i++){
//         let charCode = 65 + ((i + j) % 26);
//         line += String.fromCharCode(charCode);
//     }
//     console.log(line);

// }

// Second Last Digit Zero Checker
// let n = 100
// function slDigit(n){
//     let sDigit = parseInt(n/10)%10;
//     if(sDigit === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(slDigit(n));

// Binary To Decimal

// Method 1: Using parseInt() (Recommended)

// let binary = "10101";

// let decimal = parseInt(binary, 2)

// console.log(decimal);

// Method 2: Manual Conversion

// let binary = "1010";

// let decimal = 0;

// for(let i=0; i < binary.length; i++){
//     decimal = decimal * 2 + Number(binary[i]);
// }
// console.log(decimal);

// Digit Frequency Counter

// function freqDigit(n , d) {
//     let count = 0;

//     const digit = d.toString();

//     for(let char of n.toString()){
//         if (char === digit) {
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(freqDigit(1212111, 1));

// Calculate nPr

// function factorial(num) {
//     let fact = 1;
//  for(let i = 2; i <= num; i++){
//     fact *= i
//  }
//  return fact;
// }
// console.log(factorial(5));

// function nPr(n , r){
//     return factorial(n) / factorial(n - r)
// }
// console.log(nPr(5,2));

// Plus Minus

// function pRatio(arr){
//     let countPosi = 0;
//     let countNeg = 0;
//     let countZero = 0;

//     for(let num of arr){
//         if (num > 0) {
//             countPosi++;
//         }else if(num < 0){
//             countNeg++;
//         }else {
//             countZero++;
//         }
//     }
//     console.log((positive / arr.length).toFixed(6));
//     console.log((negative / arr.length).toFixed(6));
//     console.log((zero / arr.length).toFixed(6));
// }
// pRatio[-4 ,3 ,-9, -5, 4 ,1];

// Count Pairs with Difference K

// function countPairs(arr, k){
//     let set = new Set(arr);
//     let count = 0;

//     for(let num of arr) {
//         if(set.has(num + k)){
//             count++;
//         }
//     }
//     return count;

// }
// console.log(countPairs([1,5,3,4,2]), 2);

// Comparing Array Sums

// function arrayProblem(arrA, arrB){
//     const sumA = arrA.reduce((a,b)=> a+b , 0);
//     const sumB = arrB.reduce((a,b)=> a+b , 0);

// if (sumA > sumB) {
//     return ("first array is larger")
// }else if(sumA < sumB){
//     return ("Second array is larger")
// }else{
//     return ("both are equal");
// }
// }
// console.log(arrayProblem([1,1,4],[1,3,4]));

// Minimum Distance Between Even Numbers

// function minDistanceEvanNumber(arr) {
//     let lastEvanIndex = -1;
//     let minDistance = Infinity;

//     for(let i=0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             if (lastEvanIndex !== -1) {
//                 minDistance = Math.min(minDistance, i - lastEvanIndex);
//             }
//             lastEvanIndex = i;
//         }
//     }
//     return minDistance === Infinity ? -1 : minDistance;
// }
// console.log(minDistanceEvanNumber([1,4,7,8,3,6]));

// Square Matrix Multiplication

// function mulMat(A , B){
//     const n = A.length;

//     const result = Array.from({ length : n}, () => Array(n).fill(0));

//     for(let i=0; i < n; i++){
//         for(let j= 0; j < n; j++){
//             for(let k = 0; k < n; k++){
//                 result[i][j] += A[i][j] * B[k][j];
//             }
//         }
//     }
//     return result;
// }

// const A = [
//     [1,2],
//     [3,4]
// ];

// const B = [
//     [5,6],
//     [7,8]
// ]
// console.log(mulMat(A,B));

// Transpose of Matrix

// function matrixTran(mat, n){
//     for(let i = 0; i < n; i++){
//         for(let j=i+1; j <n; j++ ){
//             let temp = mat[i][j];
//             mat[i][j] = mat[j][i]
//             mat[j][i] = temp;
//         }
//     }
//     return mat
// }
// let mat = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrixTran(mat, 3));

// Matrix 90 Degree Rotation

// function rotateMatrix(matrix) {
//     let n = matrix.length;

//     for(let i = 0; i < n; i++){
//         for(let j = i+1; j <n; j++){
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp;
//         }
//     }
//     for(let i = 0; i < n; i++){
//         matrix[i].reverse();
//     }
//     return matrix;
// }

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(rotateMatrix(matrix));

// Fill Rows in Boolean Matrix

// function fillBooleanMatrix(mat) {
//     const rows = mat.length;
//     const cols = mat[0].length;

//     for(let i = 0; i < rows; i++){
//         let hasOne = false;

//         for(let j=0; j < cols; j++){
//             if (mat[i][j] === 1) {
//                 hasOne = true;
//                 break;
//             }
//         }
//         if(hasOne) {
//             for(let j = 0; j < cols; j++){
//                 mat[i][j] = 1;
//             }
//         }
//     }
//     return mat;
// }
// const mat = [
//     [1,0,0],
//     [0,0,0],
//     [0,1,0]
// ]
// console.log(fillBooleanMatrix(mat));

// Boundary Traversal of matrix

// function boundaryTraversal(mat) {
//   let rows = mat.length;
//   let cols = mat[0].length;

//   // Top row
//   for(let j = 0; j < cols; j++){
//     process.stdout.write(mat[0][j] + " ")
//   }
//   // right column
//   for (let i = 1; i < rows; i++){
//     process.stdout.write(mat[i][cols - 1] + " ");
//   }

//   // bottom row

//   if(rows > 1){
//     for(let j = cols - 2; j >= 0; j--){
//       process.stdout.write(mat[rows - 1][j] + " ")
//     }
//   }
//   // left colomn

//   if(cols > 1){
//     for(let i = rows - 2; i >= 1; i--){
//       process.stdout.write(mat[i][0] + " ");
//     }
//   }
// }

// const mat = [
//   [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// boundaryTraversal(mat);

// Alt Matrix Sum

// function altMatrixSum(matrix, n){
//   let blackSum = 0;
//   let whiteSum = 0;

//   for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//       if((i + j) % 2 === 0) {
//         blackSum += matrix[i][j];
//       }else{
//         whiteSum += matrix[i][j]
//       }
//     }
//   }
//   console.log(blackSum);
//   console.log(whiteSum);
// }

// let matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// altMatrixSum(matrix,3)


// function alternatetraversal(mat, rows, cols) {
//   let result = [];

//   for(let i = 0; i < rows; i++){
//     if(i % 2 === 0) {
//       for(let j = 0; j < cols; j++){
//         result.push(mat[i][j]);
//       }
//     }
//     else{
//       for(let j = cols - 1; j >= 0; j--){
//         result.push(mat[i][j]);
//       }
//     }
//   }
//   console.log(result.join(" "));
  
// }

// let mat = [
//   [1,2],
//   [3,4]
// ]
// alternatetraversal(mat,2,2)

// Spiral Matrix Traversal problem

function spiralMatrix2(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    let result = [];

    while (left <= right && top <= bottom) {

        // Top -> Bottom (left column)
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][left]);
        }
        left++;

        // Left -> Right (bottom row)
        for (let j = left; j <= right; j++) {
            result.push(matrix[bottom][j]);
        }
        bottom--;

        // Bottom -> Top (right column)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][right]);
            }
            right--;
        }

        // Right -> Left (top row)
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[top][j]);
            }
            top++;
        }
    }

    return result;
}

let matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

console.log(spiralMatrix2(matrix).join(" "));