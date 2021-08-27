import { Injectable } from '@angular/core';
import { Product } from './modal/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  product_list : Array<Product> = [];
  list:Array<Product>=[];
  cart_list : Array<Product> = JSON.parse(localStorage.getItem('cart') || '[]') || [];
  static product_imgpath: string = "../assets/";
  constructor() { }

  addProductList(details: Product){
    let detail_obj: Product = new Product();

    detail_obj.name = details.name;
    detail_obj.id = details.id;
    detail_obj.description = details.description;
    detail_obj.imagepath = CartService.product_imgpath + details.imagepath.split("\\").pop()
    detail_obj.quantity = details.quantity;
    detail_obj.price = details.price;
    this.product_list.push(detail_obj);  

     console.log('DETAIL OBJECT',detail_obj);
    console.log(this.product_list);
   for(let objects of this.product_list){
     console.log("OBJECTS",objects);
   }
    localStorage.setItem('product_list',JSON.stringify(this.product_list));
  }


  addCardList(carts :Product){    
    let cart_obj: Product = new Product();
    this.cart_list.push(carts);    
    localStorage.setItem('cart',JSON.stringify(this.cart_list));
    localStorage.setItem('product_list',JSON.stringify(this.product_list));
    
  }

  removeProducts(removeprod : Product){
    console.log("removeprod",removeprod);
    console.log("Cart List",this.cart_list);
    for(let objects of this.cart_list){
      if(objects.id == removeprod.id){
        let index = this.cart_list.indexOf(removeprod);
           this.cart_list.splice(index,1);
           localStorage.setItem('cart',JSON.stringify(this.cart_list));
      }
    }

    
  }
  }

