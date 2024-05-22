const removeFromArray = function(array, ...match) {
    let arrayLength = array.length;
    let matchLength = match.length;

    for(let i = 0; i < matchLength; i++){
        for(let j = 0; j < arrayLength; j++){
            if (array[j] === match[i]){
                array.splice(j,1);
                j--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
