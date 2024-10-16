  function solution(num, k) {
    
    const index = [...num.toString()].findIndex((v)=>
        v===k.toString()
    );
    

    return index !== -1 ? index + 1 : -1;
  }

