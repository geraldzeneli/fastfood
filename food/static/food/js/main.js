var hours = 24;
var now = new Date().getTime();
var stepTime = localStorage.getItem('steptime');

if (stepTime == null) {
  localStorage.setItem('steptime', now);
}
else {
  if (now - stepTime > hours*60*60*1000) {
    localStorage.clear();
    localStorage.setItem('steptime', now);
  }
}

var orders = JSON.parse(localStorage.getItem('orders'));
var total = localStorage.getItem('total');

if (orders === null || orders === undefined) {
  localStorage.setItem('orders', JSON.stringify([]));
  orders = JSON.parse(localStorage.getItem('orders'));
}

if (total === null || total === undefined) {
  localStorage.setItem('total', 0);
  total = localStorage.getItem('total');
}


var cart = document.querySelector('#cart');
cart.innerHTML = orders.length;
