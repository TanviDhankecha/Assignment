import React from 'react'

export const Product = (props) => {
    
    let products;
    let carts ;
    
    //Fetching Details from localstorage
    if(localStorage.getItem("products") === null)
    {
        products = [];
    }
    else
    {
       products = JSON.parse(localStorage.getItem("products"));
    }

    if(localStorage.getItem("carts") === null)
    {
        carts = [];
    }
    else
    {
       carts = JSON.parse(localStorage.getItem("carts"));
    }

    //Add product into cart
    const AddtoCart = (item) =>{
        //console.log(item.productId)
        let reqQuantity = parseInt(prompt("Please enter quantity"));
        if(reqQuantity > item.quantity)
        {
            alert("Not Enough available in stock please try again")
        }
        else if(reqQuantity > 0){
            item.quantity -= reqQuantity;
            localStorage.setItem("products",JSON.stringify(products));
            let product={
                productId:item.productId,
                name:item.name,
                image:item.image,
                description : item.description,
                quantity : reqQuantity,
                price : item.price
            };

            var temp = 0
            for(var j=0;j<carts.length;j++)
            {
                
                if(item.productId === carts[j].productId)
                {
                    carts[j].quantity += product.quantity;
                    localStorage.setItem("carts",JSON.stringify(carts));
                    props.setCarts(carts);
                    temp=1;
                    break;
                }
            
            }

            if(temp === 0)
            {
                carts.push(product);
                localStorage.setItem("carts", JSON.stringify(carts)); 
           
            }

            temp=1;
            props.setCarts(carts);
              
           
        }
        
    }

    return (

        <div className="card" style={{"width": "100%", "margin-bottom": "20px", "margin-top": "20px", "min-height": "80%;"}}>
            <div className="card-body">
                <h1 className="card-title" style={{"text-align": "center"}}>Products</h1>
                <div className="row">
                    <div className="col-md-12">
                    {
                        products.map((productitem) => {
                            return (
                                <div class="card shadow col-md-3" style={{"float":"left","margin-top":"20px","margin-left":"80px","padding":"0px","boder":"2px solid black"}}>  {/* loop here */}
                                    <img alt="" style={{"height": "200px", "width": "100%"}} src = {productitem.image.split("\\").pop()} />
                                    <div class="card-body">
                                        <h5 class="card-title" style={{"text-align": "center"}}>
                                            {productitem.name}
                                        </h5>
                                        <p class="card-text">
                                        Description: {productitem.description}
                                        </p>
                                        <p class="card-text">
                                        Price: Rs {productitem.price}
                                        </p>
                                        <p class="card-text">
                                        Available Quantity: {productitem.quantity}
                                        </p>
                                        <input type="button" class="btn btn-primary" onClick={()=>AddtoCart(productitem)}
                                        style={{"display": "block","width":"100%;"}} value="Add to Cart"/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
