function checkPalindrome(palindrome) {
  let i;
  let j;

  for (i = 0, j = palindrome.length; i < palindrome.length; i += 1, j -= 1) {
    if (palindrome[i] === palindrome[j - 1]) {
      continue;
    } else { 
      return false; 
    }
  }

  return true;
}

console.log(checkPalindrome("arara"));
