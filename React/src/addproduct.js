import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddProduct = (props) => {

    let productid;
    let products;

    if(!localStorage.getItem("productid"))
    {
      productid = 1;
    }
    else  {
      productid = parseInt(localStorage.getItem("productid"));
    } 

    if(!localStorage.getItem("products"))
    {
        products =[];
    }
    else  {
      products = JSON.parse(localStorage.getItem("products"));
      console.log(products);
     } 
   
    //Declaring States for input fields
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

     //Image Upload Code 
    const imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
            setImage(base64);
            console.debug("file stored",base64);
        });
    };
    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
        });
    }

    //Add Product to productlist
    const addProduct = (e) =>
    {
            e.preventDefault();

            if(name === "" || description === "" || quantity === "" || price === "" || image ==="" )
            {
                alert("Please Enter All Details");
                return;
            }

           
            
            let product = {
                productId: productid,
                name: name,
                description:description,
                quantity:quantity,
                price:price, 
                image:image
        }
            products.push(product);
            props.setProducts(products);
            localStorage.setItem("products", JSON.stringify(products));
            
            productid++;
            localStorage.setItem("productid",productid);
            
            //clearing states
            setName("");
            setDescription("")
            setPrice("")
            setQuantity("")
            setImage("")
    }
    
    return (
        <div style={{"margin": "50px"}}>
            <h1>AddProduct</h1>
            <form class=" mt-2 shadow-lg p-3" onSubmit={addProduct}>
                <div class="mb-3">
                  <label for="product" class="form-label">Product</label>
                  <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} 
                   id="product"  required />
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <input type="text" class="form-control" value={description} onChange={(e) => setDescription(e.target.value)} 
                   id="description" required />
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
                    <input type="file" class="form-control"  onChange ={(e)=>imageUpload(e) } id="image"  />
                </div>
                <div class="mb-3 ">
                   Quantity: <input type="text" class="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} 
                    id="quantity" required />
                    Price:<input type="text" class="form-control" value={price} onChange={(e) => setPrice(e.target.value)} 
                     id="price" required />
                </div>
                
                <button type="submit" class="btn btn-primary" style={{"margin-top": "20px"}}>Add Product</button>
              </form>
        </div>
    )
}
