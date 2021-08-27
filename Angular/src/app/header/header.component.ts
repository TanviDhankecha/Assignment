import { Component, OnInit } from '@angular/core';
import { Product } from '../modal/product';
import { CartService } from '../cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cart: CartService) { }

  static count:number = parseInt(localStorage.getItem("id") || '')||0;
  form_product: Product  = new  Product();

  _product_list : Array<Product> = [];

  ngOnInit(): void {
    this._product_list = this.cart.product_list;
  }
  
  insert(){
    HeaderComponent.count++;
    
    if(this.form_product.name!="" && this.form_product.description!="" && this.form_product.imagepath!="" && this.form_product.quantity!=null && this.form_product.price!=null){
      this.form_product.id = "product_count" + HeaderComponent.count;
    
      this.cart.addProductList(this.form_product );
      localStorage.setItem("id",HeaderComponent.count.toString());
      console.log(this.form_product);
      alert("Product Added Successfully")
      let ref= document.getElementById('cancle')
      ref?.click();
    }
    
  }
}
