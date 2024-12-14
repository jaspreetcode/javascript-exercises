const palindromes = function (string) {
    const arr = string.toLowerCase().split('');
    const newArr = arr.filter(element => (element != " " && element != "," && element != "." && element != "!"))
    const newString = newArr.join('');
    const reversedString = newArr.reverse().join('');
    if (reversedString === newString) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
