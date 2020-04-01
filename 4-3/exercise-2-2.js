function checkHigherValue(arrayInt) {
  let i;
  let bigger = 0;

  for (i = 0; i < arrayInt.length; i += 1) {
    if (i === (arrayInt.length - 1)) {
      break;
    } else {
      if (arrayInt[bigger] > arrayInt[i + 1]) {
        bigger = bigger;
      } else if (arrayInt[bigger] === arrayInt[i + 1]) {
        bigger = bigger + 1;
      } else {
        bigger = i + 1;
      }
    }
  }
  
  return bigger;
}

console.log(checkHigherValue([2, 3, 6, 7, 10, 1]));
