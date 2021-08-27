import { Component, OnInit } from '@angular/core';
import { Product } from '../modal/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  static count: any;

  constructor(private cart: CartService) { }

  _product_list : Array<Product> = [];
  _card_list : Array<Product> = [];

  
  
  ngOnInit(): void {
    
     if(localStorage.getItem("product_list")!=null){
       this.cart.product_list = JSON.parse(localStorage.getItem("product_list") || '[]');
       this._product_list = this.cart.product_list;
       console.log(this._product_list);
       
     }
    
  }
  

 addtocart(products :any){
   //let prod = 
   console.log(products.quantity);

   if(products.quantity <=0 ){
     
     alert("Sorry! Product is out of stock.");
   }
   else{
     let requiredQuan = parseInt(window.prompt("Enter Quantity: ") || '');
   let productprice_ : number = requiredQuan * parseInt(products.price);

   console.log(products.quantity);
   
   for(let ex of this.cart.cart_list ){

     if(products.id == ex.id){
       //console.log("Its pres");
       
       products.quantity = products.quantity - requiredQuan;
      
       ex.quantity += requiredQuan;
       ex.price += productprice_;
       console.log(ex.quantity);
       
       localStorage.setItem('cart',JSON.stringify(this.cart.cart_list));
       localStorage.setItem("product_list",JSON.stringify(this.cart.product_list));
       return;
     }

   }
   let prod: Product = {
    id : products.id,
    name: products.name,
    description: products.description,
    imagepath:products.imagepath,
    quantity: requiredQuan,
    price: productprice_
   }

   products.quantity = products.quantity - requiredQuan;
   console.log(products.quantity);
   
   
   this.cart.addCardList(prod);  
  
   }   
  }
  

}
