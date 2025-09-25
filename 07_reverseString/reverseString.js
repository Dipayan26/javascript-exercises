const reverseString = function(word) {

    let len = word.length;
    let wrd = '';
    for (let i = 0; i < len; i++){
        let letter = word[((len-1)-i)];
        wrd +=letter;

    }
    return wrd

};

// Do not edit below this line
module.exports = reverseString;
