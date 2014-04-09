# camel-case

Camel case a string.

## Installation

### Node

```bash
npm install camel-case --save
```

## Usage

```javascript
var camelCase = require('camel-case');

camelCase('string');         //=> "string"
camelCase('dot.case');       //=> "dotCase"
camelCase('PascalCase');     //=> "pascalCase"
camelCase('version 1.2.10'); //=> "version1_2_10"
```

## License

MIT
