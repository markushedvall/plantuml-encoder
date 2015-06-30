# plantuml-encoder

A PlantUML encoder that works both in browser and node.js.

Encoded PlantUML can be used to create PlantUML URL links.

# Install

node.js:

```
npm install plantuml-encoder
```

browser:

```
bower install plantuml-encoder
```

# Example

```javascript
var plantumlEncoder = require('plantuml-encoder');

var encoding = plantumlEncoder.encodeSync('A --> B: Hello');
console.log(encoding); // UDfpLD3LjLDmibBmICt9oGS05i03gW00

var url = 'http://www.plantuml.com/plantuml/img/' + encoding;
```

The URL can then be used to display the diagram:

![alt tag](http://www.plantuml.com/plantuml/img/UDfpLD3LjLDmibBmICt9oGS05i03gW00)

# License
MIT
