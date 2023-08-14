import { products } from "../JS/product.js";
import { cart,removeFromCart } from "../JS/cartitem.js";


let cartSummeryHTML='';


cart.forEach((cartItem)=>
{

    const productId=cartItem.productId;
    let matchProduct='';

    products.forEach((product)=>
    {
        if(product.id === productId)
        {
            matchProduct=product;
        }
    })
    
    cartSummeryHTML += 
    `<div class="cart-item-container js-cart-item-${matchProduct.id}">
    <div class="cart-item-details-grid-">
      <img class="product-image"
        src="../JS/${matchProduct.image}">
      <div class="cart-item-details">
        <div class="product-name">
          ${matchProduct.name}
        </div>
        <div class="product-price ">
        ${((matchProduct.priceRs)/100).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label js-quantity-label-${matchProduct.id}">${cartItem.quantity}</span>
          </span>

          <span class="delete-quantity-link link-primary js-delete-item" data-product-id="${matchProduct.id}}">
            Delete
          </span>
        </div>
      </div>
  </div>
  </div>`;

  
});


document.querySelector('.js-order-summary').innerHTML=cartSummeryHTML;



document.querySelector('.js-div-btn').addEventListener("click",()=>
{
  alert("order placed Succesfull!")
})


document.querySelectorAll('.js-delete-item')
.forEach((item)=>
{
    item.addEventListener('click',()=>
    {
        let proID=item.dataset.productId;
        removeFromCart(proID);
        
    const container = document.querySelector(`.js-cart-item-${proID}`);
    container.remove();
});

  

});

