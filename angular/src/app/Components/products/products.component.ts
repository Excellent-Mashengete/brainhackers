import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products:Product[] =[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products =this.productService.getProducts();
    
  }

}
