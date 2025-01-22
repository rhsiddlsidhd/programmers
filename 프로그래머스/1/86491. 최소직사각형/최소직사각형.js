function solution(sizes) {
    let width = 0;
    let height = 0;
    sizes.forEach(([w,h])=>{
        if(w<h)[w,h] = [h,w]
        width = Math.max(width,w)
        height = Math.max(height,h)
    })
    
    
    return width * height;
}