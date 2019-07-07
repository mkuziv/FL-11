let a1 = parseInt(prompt('Enter a1 please'));
let a2 = parseInt(prompt('Enter a2 please'));
let b1 = parseInt(prompt('Enter b1 please'));
let b2 = parseInt(prompt('Enter b2 please'));
let c1 = parseInt(prompt('Enter c1 please'));
let c2 = parseInt(prompt('Enter c2 please'));
let h = 2;
let lineHalf1 = (a1 + b1) / h;
let lineHalf2 = (a2 + b2) / h;
if (lineHalf1 === c1 && lineHalf2 === c2) {
  console.log(true);
} else {
  console.log(false);
}