export let cart = JSON.parse(localStorage.getItem('cart'))

if(!cart)
{ 
    cart=[
        {
            productId:"food-item-6",
            quantity:1
        }
    ];

};
 


function saveToLocal(){
    localStorage.setItem('cart',JSON.stringify(cart));
}


export function addToCart(productId)
{
    
    let matchingItem;

    cart.forEach((item)=>
    {
      if(productId===item.productId)
      {
        matchingItem=item;
      }
    });

    
    const quantitySelector=document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity= Number(quantitySelector.value);


    if(matchingItem)
    {
      matchingItem.quantity+=quantity;
    }
    else{
    cart.push({
      productId,
      quantity
    });
    }
    saveToLocal();
}

let newCart=[];

export function removeFromCart(productId){

    cart.forEach((item)=>
    {
        if(item.poductId !== productId)
        {
            newCart.push(item);
        }
    }
    );
     cart=newCart;

     saveToLocal();

}


export function calculateCartQuantity() {
    let cartQuantity = 0;
  
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  
    return cartQuantity;}