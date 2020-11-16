var { isObject, isString, isNumber } = require('./utils');

function PayloadBuilderError() {
}

PayloadBuilderError.prototype = Object.create(Error.prototype);
PayloadBuilderError.prototype.constructor = PayloadBuilderError;

function PayloadBuilder() {
    this.payload = {};
    this.payloadKey = 'data';
}

PayloadBuilder.prototype.merge = function (payload) {
    if (!isObject(payload)) {
        throw new PayloadBuilderError('Payload must be an object');
    }

    this.payload = Object.assign(this.payload, payload);
    return this;
};

PayloadBuilder.prototype.setPayloadKey = function (key) {
    if (!isString(key) && !isNumber(key)) {
        throw new PayloadBuilderError('Key must be a string or a number');
    }
    this.payloadKey = key;

    return this;
};

PayloadBuilder.prototype.getPayload = function () {
    var payload = {};
    payload[this.payloadKey] = this.payload;

    return payload;
};

module.exports.PayloadBuilder = PayloadBuilder;
