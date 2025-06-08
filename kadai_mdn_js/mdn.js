const today = new Date();

const [month, day, year] = [
  today.getMonth() + 1,
  today.getDate(),
  today.getFullYear(),
];
  console.log(today.getFullYear() + "年" + month + "月" +  day + "日");


  const [hour, minutes, seconds] = [
  today.getHours(),
  today.getMinutes(),
  today.getSeconds(),
];
console.log(hour + "時" + minutes + "分" + seconds + "秒");

new Date();