function isOdd(num){
  if(num === 1){
    return true
  } else {
    return num % 2 === 1
  }
}


console.log("1 is odd: " + isOdd(1));
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));