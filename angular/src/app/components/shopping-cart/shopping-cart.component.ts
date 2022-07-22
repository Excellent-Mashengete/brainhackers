import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';

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
  errorMessage = '';

  products:any = [];
  totalNumber: number = 0
  sum: number = 0;
  totTax: number = 0;
  totalDue: number = 0;
  shipping: number = 0;
  totalshipping:number = 0; 
  id:any
  products_id:any = []
  constructor(private order:OrdersService, 
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
      
      this.totalNumber = data.length;
      
      data.forEach((obj:any) => {
        this.sum += parseFloat(obj.prod_price);
        console.log(this.sum);
      });

      //console.log(this.products_id)
    }
   })

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

  checkout(item:any){
    
  }

}
