import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from "../../shared/services/products.service";
import { Product } from "../../shared/models/product";

@Component({
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProductsService]
})
export class StoreComponent implements OnInit {
  products!: Product[];

  constructor(private _service: ProductsService) { }

  ngOnInit(): void {
    this._service.getAllProducts().subscribe(data => {
      this.products = data;
      // console.log(this.products);
    })
  }


}
