// Stampo i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    //  console.log(i);

    // Inizio l'integrazione di if
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}