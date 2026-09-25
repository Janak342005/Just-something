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

let number = 600851475143;
let factor = 2;
let largestPrimeFactor = 0;

while (factor * factor <= number) {

    if (number % factor === 0) {
        largestPrimeFactor = factor;
        number = number / factor;

    } else {
        factor++;
    }
}

if (number > largestPrimeFactor) {
    largestPrimeFactor = number;
}

console.log(largestPrimeFactor);

