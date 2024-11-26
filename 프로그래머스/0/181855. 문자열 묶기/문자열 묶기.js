function solution(strArr) {
  var answer = 1;
  const mapA = new Map();
  strArr.forEach((key) => {
    if (!mapA.has(key.length)) {
      mapA.set(key.length, answer);
    } else {
      mapA.set(key.length, mapA.get(key.length) + 1);
    }
  });
  return Math.max(...mapA.values());
}
