import { Component, OnInit } from '@angular/core';
import { Product } from '../modal/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }
  cart_list : Array<Product> = [];

  total_price: number=0;

  ngOnInit(): void {
     
    if(localStorage.getItem("cart")!=null){
      this.cart.cart_list = JSON.parse(localStorage.getItem("cart") || '[]');
      this.cart_list = this.cart.cart_list;
      this.calculateBill();
      console.log(this.cart_list);
      
    }
  }

  calculateBill(){
    this.total_price = 0;
    for(let objects of this.cart_list){
      this.total_price += objects.price;
    }
  }

  removeproduct(remove : Product){
    this.cart.removeProducts(remove);
    this.calculateBill();
  }
}
