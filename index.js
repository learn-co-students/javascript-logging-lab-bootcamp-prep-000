console.error("HALP");
console.warn("WARN");

function validateInteger(nInt) {
  if(nInt<0) {
    console.error("Number is negative");
  } else if(nInt == 0) {
    console.warn("Number is exactly zero");
  } else {
    console.log("A Valid Integer");
  }
}

validateInteger(45);
