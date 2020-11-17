var { isObject, isString, isNumber } = require('./utils');

function PayloadBuilderError() {
}

PayloadBuilderError.prototype = Object.create(Error.prototype);
PayloadBuilderError.prototype.constructor = PayloadBuilderError;

function PayloadBuilder() {
    this.payload = {};
    this.payloadName = 'data';
}

PayloadBuilder.prototype.merge = function (payload) {
    if (!isObject(payload)) {
        throw new PayloadBuilderError('Payload must be an object');
    }

    this.payload = Object.assign(this.payload, payload);
    return this;
};

PayloadBuilder.prototype.setPayloadName = function (payloadName) {
    if (!isString(payloadName)) {
        throw new PayloadBuilderError('Key must be a string');
    }

    this.payloadName = payloadName;
    return this;
};

PayloadBuilder.prototype.build = function (payloadName) {
    if (payloadName) {
        this.payloadName = payloadName;
    }
    
    var object = {};
    object[this.payloadName] = this.payload;

    return object;
};

module.exports.PayloadBuilder = PayloadBuilder;
