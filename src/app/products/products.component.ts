import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

addToCart : number = 0;

  decrement(){
    this.addToCart--;
  }
  increment(){
    this.addToCart++;

  }

}
