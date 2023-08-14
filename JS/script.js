import { products } from "../JS/product.js";
import { addToCart,calculateCartQuantity} from "../JS/cartitem.js";

let shopProduct=``;
products.forEach((product)=>
{
    shopProduct +=
    `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="../JS/${product.image}">
    </div>
    
    <div class="product-name limit-text-to-2-lines">
    ${product.name}
    </div>
    
    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="../img/ratings/rating-${(product.rating.stars)*10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>
    
    <div class="product-price">
      ${((product.priceRs)/100).toFixed(2)} &#8377;
    </div>
    
    <div class="product-quantity-container">
      <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    
    <div class="product-spacer"></div>
    
    <div class="added-to-cart js-added-to-cart-${product.id}">
    <img src="../img/icons/checkmark.png" alt="$">
      Added
    </div>
    
    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-Id="${product.id}">
      Add to Cart
    </button>
    </div>`
});

document.querySelector('.js-products-grid').innerHTML=shopProduct;

const addedMsgTimeout={};

function UpdateCart()
{
  const cartQuantity = calculateCartQuantity();

    document.querySelector('.js-cart-quantity').innerHTML=`${cartQuantity}`;

}
UpdateCart();

document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>
{
      button.addEventListener('click',()=>
      {
          const productId=button.dataset.productId;
          
        addToCart(productId);
        UpdateCart();
      
          const addedMsg= document.querySelector(`.js-added-to-cart-${productId}`);
          addedMsg.classList.add('added-to-cart-visible')

          const prevTimeOutId= addedMsgTimeout[productId];
              
          if(prevTimeOutId){
            clearTimeout(prevTimeOutId);
          }
          const timeOutId= setTimeout(()=>
          {
            addedMsg.classList.remove('added-to-cart-visible')
          },2000);

          addedMsgTimeout[productId]=timeOutId;
        });
})
