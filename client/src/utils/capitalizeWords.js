export const capitalizeWords = (string) => {
  const prepositions = ["de", "del", "en", "el", "la", "o", "y"];

  return string.replace(/\b\w+/g, (match) => {
    const word = match.trim();
    return prepositions.includes(word.toLowerCase())
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};
