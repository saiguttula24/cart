import { Component, OnInit } from '@angular/core';

interface Product {
  id : number,
  name : string,
  image : string,
  price : number,
  quantity : number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public productsList: Product[] = [
    {
      id : 1,
      name : "Oppo",
      image : "https://cdn1.smartprix.com/rx-iRryEgiS2-w1200-h1200/RryEgiS2.jpg",
      price : 12000,
      quantity : 1
    },
    {
      id : 2,
      name : "Samsung",
      image : "https://m.media-amazon.com/images/I/515R8VeCpCL._AC_SY550_.jpg",
      price : 23000,
      quantity : 1
    },
    {
      id : 3,
      name : "OnePlus",
      image : "https://m.media-amazon.com/images/I/618T783gN6L._SL1500_.jpg",
      price : 15000,
      quantity : 1
    },
    {
      id : 4,
      name : "Noise",
      image : "https://static.toiimg.com/thumb/resizemode-4,msid-80722110,imgsize-200,width-1200/80722110.jpg",
      price : 5000,
      quantity : 1
    },
  ]

  public onDecrease(productId:number) : void{
    this.productsList = this.productsList.map((product:Product)=>{
      if(productId == product.id){
        return {
        ...product,
        quantity : product.quantity > 1 ? product.quantity -1 : 1 
      }
      }

      return product ;
    })
  }

  public onIncrease(productId:number): void{
    this.productsList = this.productsList.map((product:Product)=>{
      if(productId==product.id){
        return {
          ...product,
          quantity : product.quantity + 1
        }
      }
        return product ;
    })
  }

  public calcGrandTotal(): number {
    let total:number = 0;
    for (let product of this.productsList){
      total += (product.quantity*product.price)
    } 
    return total;
  }
}
