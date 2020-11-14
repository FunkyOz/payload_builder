class PayloadBuilderError extends Error {

}

class PayloadBuilder {
    constructor() {
        this.payload = {};

        this.isObject = payload => {
            return payload && typeof payload === 'object';
        };
    }

    merge(payload) {
        if (!this.isObject(payload)) {
            throw new PayloadBuilderError('Payload must be an object');
        }

        this.payload = Object.assign(this.payload, payload);
        return this;
    }

    getPayload() {
        return {
            data: this.payload
        };
    }
}

module.exports.PayloadBuilder = PayloadBuilder;
