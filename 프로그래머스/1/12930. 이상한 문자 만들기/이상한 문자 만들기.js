function solution(s) {
  var answer = "";

  const word = s.split(" ");
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[i].length; j++) {
      answer +=
        j % 2 === 0 ? word[i][j].toUpperCase() : word[i][j].toLowerCase();
    }
    if (i < word.length - 1) {
      answer += " ";
    }
  }
  return answer;
}
