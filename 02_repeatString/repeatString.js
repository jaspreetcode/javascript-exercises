const repeatString = function(s, n) {
    let alias = s;
    if (n == -1) return "ERROR";
    if (n == 0) return "";
    for (i = 1; i < n; i++) {
        s += alias;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
