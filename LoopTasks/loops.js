// gerade Zahlen filtern
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
  }

//sum ungerade zahlen
let sum = 0;
for (let i = 1; i <= 100; i += 2) {
  sum += i;
}
console.log("Summe:", sum);

//fizzbuzz
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }

