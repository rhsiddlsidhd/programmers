function solution(my_string, n) {
    var result = "";
    for (var i = 0; i < my_string.length; i++) {
        for (var j = 0; j < n; j++) {
            result += my_string[i];
        }
    }
    return result;
}