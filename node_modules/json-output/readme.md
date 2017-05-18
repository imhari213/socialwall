
# JSON Output Helper Utils

## Install

```bash
$ npm install json-output
```

## Usage

```javascript
var json = require('json-output');


json.error(new Error('foo'));
/*
   { message: 'Foo',
     stack: 'Error: Foo\n    at repl:1:10\n    at REPLServer.self.eval (repl.js:111:21)\n    at Interface.<anonymous> (repl.js:250:12)\n    at Interface.EventEmitter.emit (events.js:88:17)\n    at Interface._onLine (readline.js:183:10)\n    at Interface._line (readline.js:502:8)\n    at Interface._ttyWrite (readline.js:720:14)\n    at ReadStream.<anonymous> (readline.js:105:12)\n    at ReadStream.EventEmitter.emit (events.js:115:20)\n    at emitKey (readline.js:1042:12)',
     stackArray: 
      [ 'at repl:1:10',
        'at REPLServer.self.eval (repl.js:111:21)',
        'at Interface.<anonymous> (repl.js:250:12)',
        'at Interface.EventEmitter.emit (events.js:88:17)',
        'at Interface._onLine (readline.js:183:10)',
        'at Interface._line (readline.js:502:8)',
        'at Interface._ttyWrite (readline.js:720:14)',
        'at ReadStream.<anonymous> (readline.js:105:12)',
        'at ReadStream.EventEmitter.emit (events.js:115:20)',
        'at emitKey (readline.js:1042:12)' ] } }
*/


json.error('This is an error message');
/*
   { message: 'This is an error message' }
*/


/**
 * Send an JSON error response in an express app
 */
app.get('/some/route', function(req, res) {
	var sendJson = json.respondTo(res);
	try {
		doSomethingCool();
	} catch (err) {
		sendJson.error(err, 500);
		return;
	}
	sendJson({ status: 'OK' });
});
```

## API

### Object json.error ( Mixed error )

Creates a uniform JSON error object. All error objects will at least contain a `message` property. Other properties that will be added as available are `stack`, `stackArray`, and `status`.

### Function json.respondTo ( HTTPResponse res )

Returns a function for sending JSON responses.

```javascript
app.get('/foo', function(req, res) {
	var sendJson = json.respondTo(res);
	doFoo(function(err) {
		if (err) {
			sendJson.error(err);
		}
		sendJson({ status: 'OK' });
	});
});
```

#### void sendJson ( Mixed json[, Number status = 200 ])

Sends a JSON response, equivilent to calling `res.json(json, status)`.

#### void sendJson.error ( Mixed error[, Number status = 500 ])

Sends a JSON error response. The `error` value will be parsed using `json.error` before sending. If a `status` is given as a parameter, that status code will always take priority. If there is not one given, the parsed error object will be checked for a `status` property, and if one is found, that status will be used. If no status is given in either place, the default is 500.














