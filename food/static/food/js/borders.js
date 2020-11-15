var bcart = document.querySelector('#bcart');
var btotal = document.querySelector('#btotal');

//add pizzas

function addBurger(bid){
  // get pizza name
  burgerId = '#bur' + bid;
  var name = document.querySelector(burgerId).innerHTML;

  //get pizza price
  var radio = 'burger' + bid; //pizza on DB
  var pri = document.getElementsByName(radio);
  var size, price;
  if(pri[0].checked ){
    price = pri[0].value;
    size = 'M';
  }
  else {
    price = pri[1].value;
    size = 'L';
  }


  var orders = JSON.parse(localStorage.getItem('orders'));
  var total = localStorage.getItem('total');
  var cartSize = orders.length;

  //saving item and total in localstorage
  orders[cartSize] = [name, size, price];
  localStorage.setItem('orders', JSON.stringify(orders));

  total = Number(total) + Number(price);
  localStorage.setItem('total', total);

  //update number of items in shopping cart
  var cart = document.querySelector('#cart');
  cart.innerHTML = orders.length;

  btn = '<div class="del" onClick="removeBurger('+ cartSize +')">x</div>';

  btotal.innerHTML = 'Total: ' + '$' + total;
  bcart.innerHTML += '<li>'+ name +' ' + size + ': $' + price + btn +'</li>'
}


function bShoppingCart(){
  var orders = JSON.parse(localStorage.getItem('orders'));
  var total = localStorage.getItem('total');
  var cartSize = orders.length;
  bcart.innerHTML = '';
  for (let i = 0; i < cartSize; i++) {
    btn = '<div class="del" onClick="removeBurger('+ i +')">x</div>';
    bcart.innerHTML += '<li>'+ orders[i][0]+ ' '+orders[i][1]+': $'+orders[i][2]+ btn + '</li>'
  }
  btotal.innerHTML = 'Total: ' + '$' + total;
}

bShoppingCart();

function removeBurger(n){
  var orders= JSON.parse(localStorage.getItem('orders'));
  var total = localStorage.getItem('total');
  total  = Number(total) - Number(orders[n][2]);
  orders.splice(n, 1);

  //update number of items in shopping cart
  var cart = document.querySelector('#cart');
  cart.innerHTML = orders.length;

  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('total', total);
  
  bShoppingCart();
}
