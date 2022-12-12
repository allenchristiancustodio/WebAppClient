import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';


export interface ProductData{
   prodctid: string;
   name: string;
   productNumber: string;
   listPrice:string;
   safetyStockLevel: string;
   color:string;
   modifiedDate?: Date;

}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products: any;
  displayedColumn: string[] = ['productId', 'name', 'productNumber', 'listPrice', 'safetyStockLevel', 'color' ];
  dataSource!: MatTableDataSource<ProductData>;
  maxall : number=20;
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort  
  

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
  
    this.productService.getAllProducts().subscribe({
      next:(products) =>{
        this.products = products;
        console.log(products);

        this.dataSource = new MatTableDataSource(this.products)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error:(response) =>{
        console.log(response);
      }
    })

  

  } 

  applyFilter(event: Event){
    const filterValue = (event?.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
 } 

}
