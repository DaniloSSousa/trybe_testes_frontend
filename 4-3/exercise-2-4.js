function biggestName(arrayNam) {
  let i;
  let bigger = 0;

  for (i = 0; i < arrayNam.length; i += 1) {
    if (i === (arrayNam.length - 1)) {
      break;
    } else {
      if (arrayNam[bigger].length > arrayNam[i + 1].length) {
        bigger = bigger;
      } else if (arrayNam[bigger].length === arrayNam[i + 1].length) {
        bigger = bigger + 1;
      } else {
        bigger = i + 1;
      }
    }
  }
  
  return arrayNam[bigger];
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
