const repeatString = function(string,num) {
    let repeatedString = string;
    if(num < 0) {
        return "ERROR";
    } else if (num === 0){
        return "";
    }else {
        for(let i = 0; i < num-1; i++){
            repeatedString += string;
        }
        return repeatedString;
    }    
};

// Do not edit below this line
module.exports = repeatString;
