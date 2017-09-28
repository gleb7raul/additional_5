module.exports = function check(str, bracketsConfig) {
  // your solution
  let num = 0;
  for (let j = str.length; j >= 0; j--) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      if (str[j] == bracketsConfig[k][0]) {
        str = str.replace(bracketsConfig[k].join(''), '');
      }
    }
  }
  if (str == '') {
    return true;
  }
  else {
    return false;
  }
}
