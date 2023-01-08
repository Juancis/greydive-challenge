export const addUpperCaseFirstLetter = (item) => {
  return item
    .split("")
    .map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase();
      }
      return letter;
    })
    .join("");
};

export const addUpperCase = (item) => {
  return item
    .split("")
    .map((letter) => {
      return letter.toUpperCase();
    })
    .join("");
};

export const addPascalCase = (item) => {
  let word = "";
  for (let i = 0; i < item.length; i++) {
    if (i === 0) {
      word += item[i].toUpperCase();
    } else if (item[i - 1] === " ") {
      word += item[i].toUpperCase();
    } else {
      word += item[i].toLowerCase();
    }
  }
  return word;
};

export const reverseDate = (date) => {
  const arrayDate = date.split("-");
  return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
};
