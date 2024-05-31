const fibonacci = function(num) {
    let number = parseInt(num);
    let arr = [1,1];
    if (num < 0 ) {
        return ("OOPS");
    } else if (num == 0){
        return 0;
    } else if(num === 1 || num === 2) {
        return 1;
    } else {
        for (let i = 2; i < num; i++) {
            number = arr[i-1] + arr[i-2];
            arr.push(number);
        }
    }
    return arr[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
 