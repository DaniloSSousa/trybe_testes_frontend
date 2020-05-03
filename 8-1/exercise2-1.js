const factorial = n => {
  if (n === 0 || n === 1) return 1;

  let result = n * (n - 1);
  
  for (let i = n - 1; i > 1; i -= 1) {
    result *= i - 1;
  }

  return result;
}
