const reverseString = function (str) {
    let newStr = []
    for (let i = str.length - 1; i >= 0; i--) {
        newStr.push(str.at(i));

    }
    return newStr.join('');
};

// Do not edit below this line
module.exports = reverseString;


// Solution : 
// "this is a string".split("").reverse().join("")