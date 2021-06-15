export const comparingString = (b, a) => {
  a = a.toUpperCase();
  b = b.toUpperCase();
  a = a.replace(/ /g, "");
  b = b.replace(/ /g, "");
  return b.includes(a);
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
