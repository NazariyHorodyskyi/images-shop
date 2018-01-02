export const getPicturesArray = () => {
  const arr = [];
  for(let i = 1; i <= 11; i++) {
    arr.push({
      id: i,
      url: require(`./assets/img/pics/${i < 10 ? '0' + i : i}.jpg`)
    });
  }
  return arr;
};

export const getBordersArray = () => {
  const arr = [];
  for(let i = 1; i <= 15; i++) {
    arr.push({
      id: i,
      url: require(`./assets/img/borders/rama-${i < 10 ? '0' + i : i}.png`)
    });
  }
  return arr;
};

export const getMarksArray = () => {
  const arr = [];
  for(let i = 1; i <= 8; i++) {
    arr.push({
      id: i,
      url: require(`./assets/img/marks/${i < 10 ? '0' + i : i}.jpg`)
    });
  }
  return arr;
};