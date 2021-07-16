var total = 0;
var count = 0;
function addProduct() {
  if (
    !document.getElementById("product").value ||
    !document.getElementById("description").value ||
    !document.getElementById("quantity").value ||
    !document.getElementById("price").value ||
    !document.getElementById("image").value
  ) {
    alert("Please Enter details");
  } else if (
    isNaN(document.getElementById("product").value) &&
    isNaN(document.getElementById("description").value) &&
    !isNaN(document.getElementById("quantity").value) &&
    !isNaN(document.getElementById("price").value)
  ) {
    count++;
    var product = document.createElement("div");
    product.setAttribute("class", "card col-md-5 shadow-lg ");
    product.setAttribute("id", "product" + count);
    product.style.float = "left";
    product.style.margin = "10px";

    var span = document.createElement("span");
    span.setAttribute("class", "hide");
    span.innerText = "product" + count;

    product.appendChild(span);

    var image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.alt = "Product Image";
    image.style.maxHeight = "170px";
    image.style.margin= "auto";
    image.style.width="50%";

    var imgpath = document.getElementById("image").value.split("\\").pop();
    image.src = imgpath;

    product.appendChild(image);

    var div = document.createElement("div");
    div.setAttribute("class", "card-body");
    div.setAttribute("id", "product_div");

    var h5 = document.createElement("h5");
    h5.setAttribute("class", "card-text");
    h5.innerText = "Product: ";

    var h5_text = document.createElement("span");
    h5_text.setAttribute("class", "card-text");
    h5_text.innerText = document.getElementById("product").value;

    h5.appendChild(h5_text);

    var description = document.createElement("p");
    description.setAttribute("class", "card-text");
    description.innerText =
      "Description: " + document.getElementById("description").value;

    var quantity = document.createElement("p");
    quantity.setAttribute("class", "card-text");
    quantity.innerText = "Quantity: ";
    quantity.setAttribute("id", "product-quantity");

    var quantity_value = document.createElement("span");
    quantity_value.setAttribute("class", "card-text");
    quantity_value.innerText = document.getElementById("quantity").value;

    quantity.appendChild(quantity_value);

    var price = document.createElement("p");
    price.setAttribute("class", "card-text");
    price.innerText = "Price: ";

    var price_value = document.createElement("span");
    price_value.setAttribute("class", "card-text");
    price_value.innerText = document.getElementById("price").value;

    price.appendChild(price_value);

    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary ");
    button.innerHTML = "Add to Cart";
    button.setAttribute("onclick", "addCart(this.parentNode.parentNode)");

    div.appendChild(h5);
    div.appendChild(description);
    div.appendChild(quantity);
    div.appendChild(price);
    div.appendChild(button);

    product.appendChild(div);
    document.getElementById("products").appendChild(product);
  } else {
    alert("Please enter deatils Properly");
  }
  alert("Product Added Successfully");
  document.getElementById("newForm").reset();
}

function addCart(item) {
  console.log("ITEM", item);
  var find_item = item.childNodes[2];
  console.log("find_item", find_item.childNodes);

  var quan = find_item.childNodes[2];
  var pri = find_item.childNodes[3];
  var price_text = pri.childNodes[0];

  var enterQuantity = prompt("Enter the quantity:");
  console.log(typeof quan.childNodes[1].innerHTML);
  console.log(typeof enterQuantity);

  if (
    enterQuantity <= 0 ||
    Number(enterQuantity) > Number(quan.childNodes[1].innerHTML)
  ) {
    alert("This much Quantity is not available");
  } else {
    var resultQuantity = quan.childNodes[1].innerHTML - enterQuantity;

    quan.childNodes[1].innerHTML = resultQuantity;

    var resultPrice = pri.childNodes[1].innerText * enterQuantity;
    total = total + resultPrice;

    var totalPrice = document.getElementById("total-price");
    totalPrice.innerHTML = total;
    var cart =document.createElement("div");
    cart.setAttribute("class","cart");
    cart.style.display="flex";
    document.getElementById("main").appendChild(cart);
    var product = document.createElement("div");


    var cartImage = document.createElement("img");
    cartImage.setAttribute("class", "card-img-top ");
   cartImage.alt = "Product_Cart Image cartImage";
    cartImage.style.maxHeight = "170px";
    cartImage.style.width="24%";
    cartImage.style.objectfit="cover";

    

    var imcartImageage = document.createElement("img");
    cartImage.setAttribute("class", "card-img-top");
     cartImage.alt = "Product Image";
    cartImage.style.maxHeight = "170px";
    cartImage.style.margin= "auto";
    cartImage.src = item.childNodes[1].src;

    var div = document.createElement("div");
    div.setAttribute("class", "cart-info  cart2");
    div.style.display="flex";
    div.style.position="relative";
    var productName = document.createElement("p");
    productName.setAttribute("class", "card-text ");
    productName.innerText =
      "Product:" + find_item.childNodes[0].childNodes[1].innerText;

    var Price = document.createElement("p");
    Price.setAttribute("class", "card-text ");
    Price.innerText = "Price: ";

    var Price_span = document.createElement("span");
    Price_span.setAttribute("class", "card-text");
    Price_span.innerText = resultPrice;

    Price.appendChild(Price_span);

    var quantity = document.createElement("p");
    productName.setAttribute("class", "card-text ");
    quantity.innerText = "Selected Quantity: ";

    var quantity_span = document.createElement("span");
    quantity_span.setAttribute("class", "card-text ");
    quantity_span.innerText = enterQuantity;

    quantity.appendChild(quantity_span);

    var productId_span = document.createElement("span");
    productId_span.setAttribute("class", "hide");
    productId_span.innerText = item.childNodes[0].innerText;

    var button = document.createElement("button");
    button.setAttribute("class", "btn  remove");
     button.style.width="28%";

    button.innerHTML = "Remove";
    button.setAttribute("onclick", "removeItem(this.parentNode)");

    var hr = document.createElement("hr");

    div.appendChild(cartImage);
    div.appendChild(productName);
    div.appendChild(Price);
    div.appendChild(quantity);
    div.appendChild(productId_span);
    div.appendChild(button);
    div.appendChild(hr);

    product.appendChild(div);
    document.getElementById("cartList").appendChild(product);
  }
}

function removeItem(removeItem) {
  console.log(removeItem.childNodes[2].childNodes[1].innerText);
  console.log(removeItem.childNodes);
  var getPrice = Number(removeItem.childNodes[2].childNodes[1].innerText);
  total = total - getPrice;

  var totalPrice = document.getElementById("total-price");
  totalPrice.innerHTML = total;

  var p_id = removeItem.childNodes[4].innerText;
  console.log(p_id);

  var gProduct = document.getElementById(p_id);
  console.log(gProduct);

  var getChilds = gProduct.childNodes[2];
  console.log(getChilds.childNodes[2].childNodes[1].innerText);

  getChilds.childNodes[2].childNodes[1].innerText =
    Number(getChilds.childNodes[2].childNodes[1].innerText) +
    Number(removeItem.childNodes[3].childNodes[1].innerText);

  removeItem.remove();
}
