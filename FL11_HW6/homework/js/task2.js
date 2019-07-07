let a = parseInt(prompt('Enter a please'));
let b = parseInt(prompt('Enter b please'));
let c = parseInt(prompt('Enter c please'));
if (a + b <= c || a + c <= b || c + b <= a ) {
  console.log('Triangle doesn’t exist');
} else if (a === b && a === c && b === c) { 
  console.log('Equivalent');
} else if (a === b || a === c || c === b) {
  console.log('Isosceles');
} else {
  console.log('Normal');
}