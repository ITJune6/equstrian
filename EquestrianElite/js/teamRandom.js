
// Each time the page is loaded, the list items will be shuffled into a new random order.

window.onload = function() {
  var ul = document.getElementById('list');
  for (var i = ul.children.length; i >= 0; i--) {
    //removes a random child element and appends it to the end of the list
    ul.appendChild(ul.children[Math.floor(Math.random() * i)]);
  }
}