
const middle = function(list) {
  if (list.length < 3) {
    return [];
  }
  if (list.length % 2 === 0) {
    const half = (list.length / 2);
    return [
      list[half - 1],
      list[half]
    ];
  } else {
    const index = Math.floor(list.length / 2);
    return [list[index]];
  }
};

module.exports = middle;



