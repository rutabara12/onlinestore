
const API_CATEGORIES = "https://fakestoreapi.com/products/categories";
const category=sessionStorage.getItem("category");
const CATEGORIES_API = "https://fakestoreapi.com/products/category/"+category;

window.onerror = () => true;
async function getData() {
  let data = await (await fetch(CATEGORIES_API)).json();
  return await data;
}

window.addEventListener("load", function () {
  document.getElementById("loader").classList.remove("hideorshow");
});

async function getCategories() {
  let data = await (await fetch(API_CATEGORIES)).json();
  return await data;
}

getCategories().then(function (categories) {
  categories.forEach(function (category) {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add(...["list-group-item", "item-category"]);
    categoryItem.innerHTML = category;
    document.getElementById("category-container").appendChild(categoryItem);
    categoryItem.addEventListener("click",function(){
      location.href = "categories.html";
      sessionStorage.setItem("category",category);
    })
  });
});

getData()
  .then((products) => {
    document.getElementById("loader").classList.add("hideorshow");
    products.forEach(function (product) {
      const productItem = document.createElement("div");
      productItem.classList.add(...["card", "product-item"]);
      const productImg = document.createElement("img");
      productImg.src = product.image;
      productImg.alt = "Product image";

      const productTitle = document.createElement("p");
      productTitle.innerHTML = product.title;
      const productPrice = document.createElement("h4");
      productPrice.innerHTML = "$ " + product.price;
      const productDiscount = document.createElement("span");
      productDiscount.innerHTML = product.rating.rate;

      productItem.appendChild(productImg);
      productItem.appendChild(productPrice);
      productItem.appendChild(productTitle);
      productItem.appendChild(productDiscount);
      document.getElementById("products-container").appendChild(productItem);

      productItem.addEventListener("click", function () {
        location.href = "details.html";
        sessionStorage.setItem("product",JSON.stringify(product));
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
