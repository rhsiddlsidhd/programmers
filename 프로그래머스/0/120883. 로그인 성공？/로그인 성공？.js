  function solution(id_pw, db) {
    var answer = "fail";
   //구조분해할당
    const inputUserId = id_pw[0];
    const inputUserPw = id_pw[1];
  for(let [dbId,dbPw] of db){
      if(inputUserId === dbId){
          if(inputUserPw === dbPw){
             return answer = "login"
          } else{
            return  answer = "wrong pw"
          }
      }
  }
    return answer;
  }
