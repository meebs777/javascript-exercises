const findTheOldest = function(arr) {
    const date = new Date();
    let oldestIndex;
    console.log(arr);

    const ageDifference = arr.map (people => {
        if (people.yearOfDeath === undefined) {
            return date.getFullYear() - people.yearOfBirth;
        } else {
            return people.yearOfDeath - people.yearOfBirth;
        }
    })


    for (let i = 0; i < ageDifference.length; i++) {
        if (i === 0) {
            oldestIndex = i;
            continue;
        } else if (ageDifference[i] > ageDifference[i-1]) {
            oldestIndex = i;
        }
    }
    
    return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
