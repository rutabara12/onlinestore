let product=JSON.parse(sessionStorage.getItem("product"));

if(product){
    let productDetails = `<div class="col-6 image-container">
    <img src="${product.image}" alt="" />
    </div>
    <div class="col-6">
      <div class="product-details-container">
          <h4>${product.title}</h4>
          <h2>${product.price}</h2>
          <p>${product.category}</p>
          <p>
            ${product.description}
          </p>   
          <div class="row">
            <div class="col-6">
              <button class="btn-buy"><i class="fas fa-money-bill-alt"></i> Buy Now</button>
            </div>
            <div class="col-6">
              <button class="btn-cart"><i class="fas fa-cart-plus"></i> Add to cart</button>
            </div>
          </div>
          
      </div>
    </div>
    `;
    document.getElementById("details-container").innerHTML=productDetails; 
}else {
 location.href="index.html";
}

