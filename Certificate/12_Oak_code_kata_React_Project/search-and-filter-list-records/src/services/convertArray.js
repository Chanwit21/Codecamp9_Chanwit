export const convertStrArrayToArr = data => {
  const result = [];
  for (let item of data.split(/,|'| /)) {
    if (!(item === '[' || item === ']' || item.length === 0)) {
      result.push(item);
    }
  }
  return result;
};
