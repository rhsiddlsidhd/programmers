  function solution(my_string) {
    var answer = "";
    const r = ["a", "e", "i", "o", "u"];
    answer = [...my_string].filter((v) => {
      return !r.includes(v);
    });
    return answer.join("");
  }