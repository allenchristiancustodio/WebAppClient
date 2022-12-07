import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  constructor( private productService: ProductsService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe({
      next:(products) =>{
        this.products = products;
        console.log(products);
      },
      error:(response) =>{
        console.log(response);
      }
    })

  } 

}
