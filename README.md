# Payload builder
Simple easy helper for manage payloads.

### Usage

```javascript
const PayloadBuilder = require('payload_builder');

const builderPayload = new PayloadBuilder();
builderPayload.merge({
    prop: {
        test: 'This is a test'
    }
}).merge({
    property: {
        test: 'Another test'
    }
});

console.log(builderPayload.getPayload());
// { data: { prop: { test: 'This is a test' }, property: { test: 'Another test' } } }
```