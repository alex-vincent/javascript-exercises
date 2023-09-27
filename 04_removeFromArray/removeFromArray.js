// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
const removeFromArray = function(array, ...value) {
    return array.filter(item => !value.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
