const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(items) {
  if (items == []) return 0;
  const total = items.reduce((total, item) => {
    return total + item;
  }, 0);
  return total;
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
	if (num == 0) return 1;
  else return num * factorial(num-1);
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
