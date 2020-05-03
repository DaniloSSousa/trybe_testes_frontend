const longWord = (w) => {
  const words = w.split(' ');
  let biggerWord = '';

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > biggerWord.length) {
      biggerWord = words[i];
    }
  }

  return biggerWord;
}
