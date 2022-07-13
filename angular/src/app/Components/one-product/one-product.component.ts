import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
   
    // this.oneProductservice.sendGetRequest().subscribe((data: any)=>{
    //   console.log(data);
    //   this.products = data;
  
   }

}

//   addCart(){
//     console.log(this.sizeForm.value);
    
//   }

// }


