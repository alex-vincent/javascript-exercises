const palindromes = function (string) {
    if (string === '') return true;
    let stringArray = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverseStringArray = stringArray.split('').reverse().join('');
    return stringArray === reverseStringArray;

};

// Do not edit below this line
module.exports = palindromes;
