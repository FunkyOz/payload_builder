const { PayloadBuilder } = require('./../src/app.js');
const assert = require('assert');

describe('PayloadBuilder', function () {
    it('merge object and return it', function () {
        let builderPayload = new PayloadBuilder();

        let payload = builderPayload.setPayloadName('test')
            .merge({
                prop: {
                    test: 'This is a test'
                }
            }).merge({
                property: {
                    test: 'Another thest'
                }
            }).build();

        console.log(payload);

        assert.deepStrictEqual(payload, {
            test: {
                prop: {
                    test: 'This is a test'
                },
                property: {
                    test: 'Another thest'
                }
            }
        });
    });

    it('merge object and expect exception', function () {
        let builderPayload = new PayloadBuilder();
        assert.throws(function () {
            builderPayload.merge('aaa');
        }, Error, 'Payload must be an object');
    });

    it('set paylod key with invalid value', function () {
        let builderPayload = new PayloadBuilder();
        assert.throws(function () {
            builderPayload.setPayloadName({});
        }, Error, 'Payload must be a string');
    });
});