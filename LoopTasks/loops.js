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