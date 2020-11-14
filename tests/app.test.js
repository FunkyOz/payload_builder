const { PayloadBuilder } = require('./../src/app.js');
const assert = require('assert');

describe('PayloadBuilder', function () {
    it('merge object and return it', function () {
        let builderPayload = new PayloadBuilder();
        builderPayload.merge({
            prop: {
                test: 'This is a test'
            }
        }).merge({
            property: {
                test: 'Another thest'
            }
        });

        assert.deepStrictEqual(builderPayload.getPayload(), {
            data: {
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
        assert.throws(_ => { builderPayload.merge('aaa') }, Error, 'Payload must be an object');
    });
});