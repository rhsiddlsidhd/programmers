function solution(message) {
  let wordlength = 2;
  let wordSplit = message.split("");
  let result = 0;

  for (let i = 0; i < wordSplit.length; i++) {
    let word = wordSplit[i];

    result += word.length * wordlength;
  }
 
  return result;
}