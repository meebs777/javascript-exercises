const palindromes = function (string) {
    //create copy of string, remove spaces, join back from array to string, seperate back into array now without spaces
    let reverseArray = string.slice().split(" ").join("").split("").reverse();
    let forwardArray = string.slice().split(" ").join("").split("");
    //remove any form of punctuation in strings
    reverseArray = reverseArray.filter(str => !str.match(/[^\w\s]/g));
    forwardArray = forwardArray.filter(str => !str.match(/[^\w\s]/g));
    //make all same case
    reverseArray = reverseArray.map(str => str.toLowerCase());
    forwardArray = forwardArray.map(str => str.toLowerCase());
    
    for(let i = 0; i < string.length; i++) {
        if (reverseArray[i] === forwardArray[i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
