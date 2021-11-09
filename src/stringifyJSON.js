// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return  '' + obj;
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 1) {
      return '[' + stringifyJSON(obj[0]) + ']';
    } else {
      for (var i = 0; i < obj.length; i++) {
        if (i === obj.length - 1) {
          result += stringifyJSON(obj[i]);
        } else {
          result += stringifyJSON(obj[i]) + ',';
        }
      }
      return '[' + result + ']';
    }
  }

  if (typeof obj === 'object') {
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      } else {
        result = result + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    var result2 = result.substring(0, result.length - 1)
    return '{' + result2 + '}';
  }

};
