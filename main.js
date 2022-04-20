// 1. Easy Going
// Write a for loop that will log the numbers 1 through 20.

//for (let i = 1; i <= 20; i++) {
    // console.log(i)
//}

// GET EVEN
//Write a for loop that will log only the even numbers in 0 through 200.

//for (let i = 0; i <= 200; i++) {
    //if (i % 2 === 0)
    //console.log(i)
//}

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

//const cat = "Love me, pet me! HSSSSSS!";

//for (i = 0; i <= 20; i++) {
    
  //  console.log(cat + (i))
//}

//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or 
//"...why does the red dot always get away..." at random.

//const cat = "Love me, pet me! HSSSSSS!";
//const human = "...human...why you taking pictures of me?...";
//const catnip = "...the catnip made me do it...";
//const red = "...why does the red dot always get away...";

//for (i = 0; i <= 20; i++) {
    //if (i % 2 === 0);
  //  console.log( i + cat)
//}

// Write a javascript application that logs all numbers from 1 - 100 AND:

//If a number is divisible by 3 log "Fizz" instead of the number.

//If a number is divisible by 5 log "Buzz" instead of the number.

//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz"

const sum = 'fizz';
const yum = 'buzz';
const tum = 'fizzbuzz';

for (i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 === 0)
    console.log(sum)
}