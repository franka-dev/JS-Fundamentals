// Get the argument and try to convert to an integer
const arg = process.argv[2];
const count = parseInt(arg);

// If not a valid number, print the error message
if (isNaN(count)) {
  console.log('Missing number of occurrences');
} else {
  // Otherwise, loop 'count' times and print "C is fun"
  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
}
