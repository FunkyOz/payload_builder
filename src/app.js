class PayloadBuilder {
    constructor() {
        this.payload = {};
    }

    merge(payload) {
        this.payload = Object.assign(this.payload, payload);
    }

    getPayload() {
        return {
            data: this.payload
        };
    }
}

export default PayloadBuilder;
