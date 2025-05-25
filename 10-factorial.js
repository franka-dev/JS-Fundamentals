// Recursive factorial function
function factorial(n) {
  // If n is not a number or n <= 1, return 1
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  // Otherwise, recurse
  return n * factorial(n - 1);
}

// Read and parse the first CLI arg
const arg = parseInt(process.argv[2]);

// Compute and print factorial(arg)
console.log(factorial(arg));
