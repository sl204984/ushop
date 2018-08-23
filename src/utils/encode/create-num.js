export default function() {
  // 随机产生0到5位之间的随机数
  const _len = ~~(Math.random() * 5) + 1;
  const _rand = ~~(Math.random() * (Math.pow(36, _len)));
  return _rand.toString(36);
}