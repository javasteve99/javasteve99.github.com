(function () {
  "use strict";
  var bodyElement = document.getElementsByTagName('body')[0];
  if('ontouchstart' in window || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
    bodyElement.className += 'has-touch';
  }
}());