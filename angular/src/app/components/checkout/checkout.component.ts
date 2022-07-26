import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;


  keyPressAlphanumeric(event: { keyCode: number; preventDefault: () => void; }) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private auth:AuthenticationService
   ) { }

  Form = new FormGroup({
    address: new FormControl(''),
    city: new FormControl(''),
    town: new FormControl(''),
    zip: new FormControl(''),
  });

  submitted = false
  profile:any
  id: any

  ngOnInit(): void {
    this.loading = false;
    this.Form = this.formBuilder.group({
      address: ['', [Validators.required]],
      city: ['', Validators.required],
      town: ['', Validators.required],
      zip: ['', Validators.required],
    },
  );
  this.user()
  

  }

  get f():{ [key: string]: AbstractControl }{

    return this.Form.controls;
  }

  user(){
    return this.auth.getUserProfile().subscribe({next:data => {
      this.profile = data
      this.id = this.profile.decoded.id
      
    }})  
  }

  onSubmit(){
    this.submitted = true;

    if(this.Form.invalid)
    { 
      this.loading = false;
      return
    }

     let shipping = {
       userid : this.id,
       address : this.Form.value.address,
       city: this.Form.value.city,
       town : this.Form.value.town,
       zip : this.Form.value.zip,
      //  delivery_price: this.shipping,
      //  totalcost: this.totalshipping
     }
     console.log(shipping)
  }

  cancelForm(){
    this.router.navigate(['cart'])
  }

  
}

// onSubmit():void{
  //   this.submitted = true;
  //   let shipping = {
  //     product_id : this.products_id,
  //     quantity: 1,
  //     address : this.Form.value.address,
  //     city: this.Form.value.city,
  //     town : this.Form.value.town,
  //     zip : this.Form.value.zip,
  //     delivery_price: this.shipping,
  //     totalcost: this.totalshipping
  //   }
   
  //   this.order.addOrders(shipping,this.id).subscribe({
  //     next:data => {
  //       console.log(data)
  //       Swal.fire(
  //         'Order Successful',
  //         'Order your order has been placed successully.'
  //         );

  //       this.router.navigate(['/products'])
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Something went wrong!',
  //         footer: '<a href="">Click here to re-order'
  //       })
  //     }

  //   })
  // }