const repeatString = function(value, times) {
    if (times < 0) return "Error";
    let string ='';
    for (let i=0; i < times ; i++){
        string += value
    }
    return string

};

// Do not edit below this line
module.exports = repeatString;
