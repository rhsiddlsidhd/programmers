
function solution(array, n) {
  let count = 0;
  array.forEach((it) => {
    if (it === n) {
      count++;
    }
  });
  console.log(count);
  return count;
}