import './App.css';
import {AddProduct} from "./addproduct";
import {Header} from "./header";
import {Product} from "./product";
import {Cart} from "./cart";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  let carts;
  let products;
  

  if(localStorage.getItem("carts") === null)
  {
      carts = [];
  }
  else
  {
     carts = JSON.parse(localStorage.getItem("carts"));
  }


  if(localStorage.getItem("products") === null)
  {
      products = [];
  }
  else
  {
     products = JSON.parse(localStorage.getItem("products"));
  }


// setting states
  const [cart, setCarts] = useState(carts);
  const[product, setProducts] = useState(products);
 

     return(
    
      <Router>
      <div className="App">
      
       <Header />
       <Switch>
       <Route exact path='/' component={Product}>
           
           </Route>
         <Route exact path='/cart' >
           <Cart cart={cart} setCarts={setCarts}   />
         </Route>
         <Route exact path='/addProduct' component={AddProduct}>
           <AddProduct product={product}  setProducts={setProducts} />
           </Route>
           <Route exact path='/product' component={Product}>
           <Product  cart={cart} setCarts={setCarts} /> 
           </Route>
       </Switch>
     </div>
  </Router>
     )
  
       


  

  

    

  
}

export default App;
