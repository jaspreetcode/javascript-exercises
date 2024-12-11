const removeFromArray = function(arr, ...args) {
    let len = arr.length;
    args.forEach((arg) => {
        let i = 0;
        while (i < len) {
            if (arg === arr[i]) {
                arr.splice(i, 1);
                i = 0;
            } else {
                i++;
            }
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
