
exports.error = function(msg) {
	var result = { };
	if (typeof msg === 'object' && msg.message) {
		result.status = msg.status;
		msg = {
			message: msg.message,
			stack: msg.stack
		};
		if (msg.stack) {
			msg.stackArray = msg.stack.split('\n').slice(1).map(trim)
		}
		if (! result.status) {
			delete result.status;
		}
		result.error = msg;
	} else {
		result.error = {message: msg};
	}
	return result;
};

// ------------------------------------------------------------------
//  Minor extension for more convienent Express use

exports.respondTo = function(res) {
	var send = function(msg, status) {
		status = status || 200;
		return res.json(msg, status);
	};
	send.error = function(msg, status) {
		return send(exports.error(msg), status || msg.status || 500);
	};
	return send;
};

// ------------------------------------------------------------------

function trim(str) {
	return str.trim();
}

