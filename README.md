# Payload builder
Simple easy helper for manage payloads.

### Usage

```javascript
const PayloadBuilder = require('payload_builder');

const builderPayload = new PayloadBuilder();
builderPayload.merge({
    data: {
        test: 'This is a test'
    }
}).merge({
    datum: {
        test: 'Another test'
    }
});

builderPayload.getPayload();
// {
//   data: {
//     test: 'This is a test'
//   }
//   datum: {
//     test: 'Another test'
//   }
// }
```