# plantuml-encoder

A PlantUML encoder that works both in browsers and for Node.js.

Encoded PlantUML can be used to create PlantUML URL links.

# Install

Node.js:

```
npm install plantuml-encoder
```

browser:

```
bower install plantuml-encoder
```

# Example

```javascript
var plantumlEncoder = require('plantuml-encoder')

var encoded = plantumlEncoder.encode('A -> B: Hello')
console.log(encoded) // UDfpLD2rKt2oKl18pSd91m0KGWDz

var url = 'http://www.plantuml.com/plantuml/img/' + encoded
```

The URL can then be used to display the diagram:

![alt tag](http://www.plantuml.com/plantuml/img/UDfpLD2rKt2oKl18pSd91m0KGWDz)

# License
MIT
