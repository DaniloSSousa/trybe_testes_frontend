function checkLowerValue(arrayInt) {
  let i;
  let smaller = 0;

  for (i = 0; i < arrayInt.length; i += 1) {
    if (i === (arrayInt.length - 1)) {
      break;
    } else {
      if (arrayInt[smaller] < arrayInt[i + 1]) {
        smaller = smaller;
      } else if (arrayInt[smaller] === arrayInt[i + 1]) {
        smaller = smaller + 1;
      } else {
        smaller = i + 1;
      }
    }
  }
  
  return smaller;
}

console.log(checkLowerValue([2, 4, 6, 7, 10, 0, -3]));
