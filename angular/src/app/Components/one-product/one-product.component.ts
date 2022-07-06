import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { OneProductService } from 'src/app/Services/one-product.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {

// sizeForm!:FormGroup


products = [];

sizeForm = new FormGroup({
  size : new FormControl('', Validators.required)
})
  constructor(private oneProductservice: OneProductService) { }

  ngOnInit(): void {
   
    this.oneProductservice.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.products = data;

    console.log(this.sizeForm.value);
  })
}

  addCart(){
    console.log(this.sizeForm.value);
    
  }

}


