function badCreateElement(type, height, width) {
  const element = document.createElement(type);
  element.style.height = height;
  element.style.width = width;
  return element;
}
badCreateElement('div');


function goodCreateElement(type, height, width) {
  const element = document.createElement(type || 'div');
  element.style.height = String(height || 100) + 'px';
  element.style.width = String(width || 100) + 'px';
  return element;
}
goodCreateElement();

// ------------------------------------------------

function safe10진수ParseInt(number, radix) {
  return parseInt(number, radix || 10);
}