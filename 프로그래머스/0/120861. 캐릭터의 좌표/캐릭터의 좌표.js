function solution(keyinput, board) {
    var center = [0,0];
    
    for(let p of keyinput){
       switch(p){
           case "left": if(-center[0] < (board[0]-1)/2 ) center[0]--;
               break;
              case "right": if(center[0] < (board[0]-1)/2 ) center[0]++;
               break; 
               case "up": if(center[1] < (board[1]-1)/2 ) center[1]++;
               break;
               case "down": if(-center[1] < (board[1]-1)/2 ) center[1]--;
               break;
           default:   
       }
    }
    
    
    
    return center;
}