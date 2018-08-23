
export const CreateDate = function (year, month) {
  const _days = new Date(year, month + 1, 0).getDate(); // 一个月的天数
  const dateArr = [
    []
  ];
  for (let i = 0; i < _days; i++) {
    const _today = new Date(year, month, i + 1);
    if (_today.getDay() % 7 === 0) {
      dateArr.push([]);
    }
    dateArr[dateArr.length - 1].push(_today);
  }
  const dateArr0Len = dateArr[0].length;
  // 第一个数组补全
  for (let i = 0; i > dateArr0Len - 7; i--) {
    dateArr[0].unshift(new Date(year, month, i));
  }
  // 最后一个数组补全
  const dateArrELen = dateArr[dateArr.length - 1].length;
  for (let i = 0; i < 7 - dateArrELen; i++) {
    dateArr[dateArr.length - 1].push(new Date(year, month + 1, i + 1));
  }
  return dateArr
}

export const FormatDecimalXX = function(num) {
  if(num > 9) {
    return '' + num;
  }
  return '0' + num;
}