const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum,item) => {
    return sum += item;
  },0 )
};

const multiply = function(array) {
  return array.reduce((sum,item) => {
    return sum *= item;
  } )
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let factor = 1;
  
  for(let i = 1; i <= num; i++) {
    factor *= i;
  }

  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
