export const capitalize = (str, exceptions) => {
  const words = str.toLowerCase().split(" ");
  const capitalizedWords = words.map((word, index) => {
    if (index === 0 || !exceptions.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });
  return capitalizedWords.join(" ");
};
