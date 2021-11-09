// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var result = [];
  var getTheClass = function (element) {
    var childList = element.children;

    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    for (var i = 0; i < childList.length; i++) {
      getTheClass(childList[i]);
    }
  };
  getTheClass(document.body);
  return result;
};