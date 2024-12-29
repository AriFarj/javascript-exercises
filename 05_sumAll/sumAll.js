const sumAll = function (firstNum, lastNum) {
    if ((firstNum < 0 || lastNum < 0) || (!Number.isInteger(firstNum) || !(Number.isInteger(lastNum))) ) 
        return 'ERROR';
    
    
   
    let maxNum = Math.max(firstNum, lastNum)
    let minNum = Math.min(firstNum, lastNum)
    return ((maxNum - minNum) + 1) * (maxNum + minNum) / 2
};

// Do not edit below this line
module.exports = sumAll;


