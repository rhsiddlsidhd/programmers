 function solution(arr) {
    var answer = arr.slice();
    const column = arr.length;

    answer.forEach((v, index) => {
      const row = v.length;
      if (row < column) {
        answer[index] = [...v, ...Array(column - row).fill(0)];
      } else if (row > column) {
        while (answer.length < row) {
          answer.push(Array(row).fill(0));
        }
      }
    });
    return answer;
  }
