const reverseString = function(string) {
    let length = string.length;
    const reverse = [];

    for (let i = 0; i <= length; i++ ){
        reverse[i] = string.at(length-i);
    }

    return reverse.join("")
};

// Do not edit below this line
module.exports = reverseString;
