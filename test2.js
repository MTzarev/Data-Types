function primeNumberChecker(num) {
 let isPrime = true;
 if (num <=3){
    isPrime = true;
 }else{
    if (num%2 ===0 || num%3 === 0){
        isPrime=false;
    }
 }
    console.log(isPrime);
}

primeNumberChecker(123);
//primeNumberChecker(9);
//primeNumberChecker(81);