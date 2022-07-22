import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';
import { CardService } from 'src/app/Services/card.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  Form = new FormGroup({
    address: new FormControl(''),
    city: new FormControl(''),
    town: new FormControl(''),
    zip: new FormControl(''),
  });
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  stocktype = false
  errorMessage = '';

  products:any = [];
  totalNumber: number = 0
  sum: number = 0;
  totTax: number = 0;
  totalDue: number = 0;
  shipping: number = 0;
  totalshipping:number = 0; 
  id:any;
  products_id:any = [];
  Stock:any
  stockMessage = '';
  idstock:any
  constructor(private order:OrdersService,
    private stock:CardService, 
    private cartitem:CartService,  
    private router:Router, 
    private formBuilder: FormBuilder) {
      let product:any;
      product = localStorage.getItem("product");
      this.products_id = JSON.parse(product)
     }

  ngOnInit(): void {
    this.id = localStorage.getItem('user_id')
    this.cartitem.getProdList().subscribe({
    next:data =>{
      this.products = data;
      console.log(this.products[0].prod_id)
      localStorage.setItem("prodid", this.products[0])
      this.totalNumber = data.length;
      

      data.forEach((obj:any) => {
        this.sum += parseFloat(obj.prod_price);
        this.idstock = parseInt(obj.prod_id);
       
        //console.log(this.products[0].prod_id);
        //console.log(this.sum);
      });
    }
   })
   //this.CheckStock(this.idstock)
   this.totalTax(this.sum);
   this.totalAmountDue();
   this.shippingCost(this.totalDue);
   this.totShippingCost();
   //this.getTotal();

    this.Form = this.formBuilder.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        town: ['', Validators.required],
        zip: ['', Validators.required],
      },
    );
  }

  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }

  onSubmit():void{
    this.submitted = true;
    let shipping = {
      product_id : this.products_id,
      quantity: 1,
      address : this.Form.value.address,
      city: this.Form.value.city,
      town : this.Form.value.town,
      zip : this.Form.value.zip,
      delivery_price: this.shipping,
      totalcost: this.totalshipping
    }
   
    this.order.addOrders(shipping,this.id).subscribe({
      next:data => {
        console.log(data)
        Swal.fire(
          'Order Successful',
          'Order your order has been placed successully.'
          );

        this.router.navigate(['/products'])
      },
      error: err => {
        this.errorMessage = err.error.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Click here to re-order'
        })
      }

    })
  }
 
  CheckStock(id:any){
    return this.stock.getunit(id).subscribe({next:data =>{
      this.Stock = data
      if(this.Stock>0){
        this.stockMessage = "IN STOCK"
        this.stocktype = true
      }
      else{
        this.stockMessage = "OUT OF STOCK"
        this.stocktype = false
      }
    }})
  }
  
 
  totalTax(num:number){
    return this.totTax = num * 0.15;
  }

  totalAmountDue(){
    return this.totalDue = this.totTax + this.sum;
  }

  shippingCost(num:number){
    return this.shipping = num * 0.15;
  }
  totShippingCost(){
    return this.totalshipping = this.shipping + this.totalDue
  }
  
  removeProduct(item:any){
    this.cartitem.removePerCart(item);
  }

  removeAllProduct(){
    this.cartitem.removeAllCart();
  }
}
