function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input: both parameters must be numbers';
  }
}

console.log(foo(1, '1')); // Output: Invalid input: both parameters must be numbers

function foo2(a,b){
    return Number(a) + Number(b);
}
console.log(foo2(1,'1')); //Output:2