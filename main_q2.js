function checkFalsy(value) {
  if (!value) {
    return "Invalid";
  }
  return value;
}

console.log(checkFalsy(0))