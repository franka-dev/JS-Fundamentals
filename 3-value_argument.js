// Access the first argument passed by the user
const firstArg = process.argv[2];

// Check if firstArg is undefined (no argument passed)
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
