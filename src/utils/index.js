module.exports.isObject = function (object) {
    return typeof object === 'object';
};

module.exports.isString = function (string) {
    return typeof string === 'string' || string instanceof String;
};

module.exports.isNumber = function (number) {
    return typeof number === 'number' && isFinite(number);
};
