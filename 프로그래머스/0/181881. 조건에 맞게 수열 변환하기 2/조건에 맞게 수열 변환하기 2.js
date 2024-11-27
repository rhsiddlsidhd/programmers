function solution(arr) {
  var answer = 0;
  let prev = arr;

  while (true) {
      
    const changeArr = prev.map((v) => {
      return (v =
        v > 50 && v % 2 === 0 ? v / 2 : v < 50 && v % 2 !== 0 ? v * 2 + 1 : v);
    });
      const isAllSome = prev.every((v,i)=> v === changeArr[i]);
      if(isAllSome)break;
      answer ++
      prev = changeArr
  }

  return answer;
}
