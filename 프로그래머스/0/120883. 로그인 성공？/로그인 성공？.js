  function solution(id_pw, db) {
    var answer = "fail";
   //구조분해할당
  //   const inputUserId = id_pw[0];
  //   const inputUserPw = id_pw[1];
  // for(let [dbId,dbPw] of db){
  //     if(inputUserId === dbId){
  //         if(inputUserPw === dbPw){
  //            return answer = "login"
  //         } else{
  //           return  answer = "wrong pw"
  //         }
  //     }
  // }
      
      //이후 map으로 리팩토링
    const [id,pw] = id_pw;
    const mapA = new Map(db)
    
 
answer = mapA.has(id) ? mapA.get(id) === pw ? "login" : "wrong pw" : "fail"     
      
    return answer;
  }
