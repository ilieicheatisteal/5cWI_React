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

//primzahlen
for (let i = 2; i <= 50; i++) {
  let primzahl = true;

  for (let x = 2; x < i; x++) {
    if (i % x === 0) {
      primzahl = false;
      break;
    }
  }
  if (primzahl) {
    console.log(i);
  }
}

//teiler finden
for (i = 1; i <= 30; i++) {
  let count = 0;
  for (y = 1; y <= 30; y++) {
    if (i % y === 0) {
      count += 1;
    }
  }
  console.log(i, "hat", count);
}

//wahrheitstabelle
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

//divisible by 5
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log("Divisible by 5");
  } else {
    console.log(i);
  }
}
