function solution(picture, k) {
    let answer = picture
      .map((v) => {
        const cur = [...v].map((v) => v.repeat(k)).join("");
        return Array(k).fill(cur);
      })
      .flat();
    return answer;
  }