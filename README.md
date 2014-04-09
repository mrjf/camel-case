# camel-case

Camel case a string.

## Installation

### Node

```bash
npm install camel-case --save
```

### Browser
#### [Require.js](http://requirejs.org/docs/start.html)

`camel-case` uses [sentence-case](https://github.com/blakeembrey/sentence-case).

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
