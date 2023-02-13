module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix) return result;

  matrix.forEach((line, index) => {
    if (index % 2 === 1){line = line.reverse()};
    result = result.concat(line);
    });

  return result;
}