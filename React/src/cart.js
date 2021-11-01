import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Cart = (props) => {
    let cart ;
    let product ;

    if(localStorage.getItem("product") === null)
    {
        product = [];
    }
    else
    {
        product = JSON.parse(localStorage.getItem("product"));
    }
    
    
    if(localStorage.getItem("cart") === null)
    {
        cart = [];
    }
    else
    {
       cart = JSON.parse(localStorage.getItem("cart"));
    }

    const removeItems = (items) =>{
        for(let prod of product){
            if( items.productId === prod.productId  )
            {
                console.log("product",prod.productId);
                prod.quantity += parseInt(items.quantity);
                localStorage.setItem("product",JSON.stringify(product));
                console.log(product);
               
                break;
               
            }
           
        }
        cart = cart.filter(c => (c.productId !== items.productId  ));
        localStorage.setItem("cart",JSON.stringify(cart));
        props.setCarts(cart);
        
       
    }

    return (

    <div className="card" style={{"width": "100%", "margin-bottom": "20px", "margin-top": "20px", "min-height": "80%;"}}>
    <div className="card-body">
        <h1 className="card-title" style={{"text-align": "center"}}>Cart</h1>
        <div className="row">
            <div className="col-md-12">
            {
                props.cart.map((productitem) => {
                          
                                            return (
                                                <div class="col-md-3" > 
                                                <hr />
                                                    <img alt="image" style={{"height": "200px", "width": "100%"}} src = {productitem.image}/>
                                                    <div class="">
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
                                                        <input type="button" class="btn btn-danger" onClick={ ()=> removeItems(productitem)}
                                                        style={{"display": "block","width":"100%;"}} value="Remove"/>
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
