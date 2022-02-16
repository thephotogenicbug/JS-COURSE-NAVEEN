// * While loop follows strict condition
// * 

let i = 0;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log("Odd Number while #" + i);
  }
  i++;
//   console.log(i);
}

// Syntax
do {
    // console.log(i)
  // code
  if (i % 2 !== 0) {
    console.log("Odd Number do while #" + i);
  }
  i++;
} while (i <= 10);
