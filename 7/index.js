let prevKey = null;

const arrangeBy = (arr, key = null) => {
  key = key ?? prevKey;
  if (!key) {
    return null;
  }

  if (!arr) return null;

  prevKey = key;

  let result = {};

  for (let obj of arr) {
    if (!obj || !obj[key]) continue;

    result[obj[key]] = result[obj[key]] || [];
    result[obj[key]].push(obj);
  }

  return result;
};

module.exports = arrangeBy;
