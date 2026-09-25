// Write a programme to find all the multiples of 3 and 5 from 1000 numbers and then give their sum.


// let numbers = [];

// let updator = 0;

// while(updator<= 684000){
//      if(updator%2 !== 0){
//         numbers.push(updator*updator)
//      }
//      updator++;
// }

// let itrator = 0;
// let sum = 0;

// while(itrator<numbers.length){
//     sum = sum + numbers[itrator];

    
    

//     itrator++;

// }


// console.log(sum);



//Fibonacci series

// let fibo = [0,1];

// let i = 1;
// let sum = 0;

// while(sum<4000000){
//     sum = fibo[i] + fibo[i-1]

//     if(sum <= 4000000){
//         fibo.push(sum)
//     }

    
//     i++
// }


// let itrator = 0;
// let sumOf = 0;

// while(itrator<fibo.length){
//     if(fibo[itrator]%2 == 0){
//         sumOf = sumOf + fibo[itrator]
//     }

//     itrator++
// }


// console.log(fibo);
// console.log(sumOf);


//So it take 34 steps to reach an value of 4 million



//Find the largest prime of 600851475143?

// let number = 600851475143;
// let factor = 2;
// let largestPrimeFactor = 0;

// while (factor * factor <= number) {

//     if (number % factor === 0) {
//         largestPrimeFactor = factor;
//         number = number / factor;

//     } else {
//         factor++;
//     }
// }

// if (number > largestPrimeFactor) {
//     largestPrimeFactor = number;
// }

// console.log(largestPrimeFactor);




//Find the largest palindrome of 3 digit.

// let largestPali = 0;

// for (let i = 100; i <= 999; i++) {

//     for (let j = 100; j <= 999; j++) {

//         let product = i * j;
//         let strProduct = String(product);
//         let reversed = strProduct.split("").reverse().join("");

//         if (strProduct === reversed) {

//             if (product > largestPali) {
//                 largestPali = product;
//             }
//         }
//     }
// }

// console.log(largestPali);


// let janak = [1,2,3,4,5];

// let kanaj = janak.reverse();

// console.log(kanaj);








// let sqrLmit = 686000n;
// let oddSq =  [];
// let itrator = 0;

// while(itrator <= sqrLmit){

//     if((itrator%2) !== 0){
//         oddSq.push(itrator * itrator);
//     }


//     itrator++
// }


// let rotate = 0;
// let sum = 0n;

// while(rotate<oddSq.length){
//     sum = sum + BigInt(oddSq[rotate]);

//     rotate++
// }

// console.log(sum);





let i = 1n;
let sum = 0n;
let mult = [];

while(i<=1000){
    if((i%BigInt(3) == 0) || (i%BigInt(5) == 0)){
        sum = sum + i;
        mult.push(i)
    }

i++
}

console.log(sum);
console.log(mult);

