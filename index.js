for( var i = 0; i < cart.length; i++){ 
   if ( cart[i].itemName === item ) {
     cart.splice(i, 1); 
     console.log(cart);
     return cart;
   }else {
     console.log(cart)
     return "That item is not in your cart";
   }
  }

function placeOrder(cardNumber) {
  // write your code here
}
