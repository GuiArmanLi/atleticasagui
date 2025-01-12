import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.dev";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable(
  {
    providedIn: "root"
  }
)
export class ProductsService {
  readonly API = `${environment.API}/products`;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.API}`);
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${this.API}`, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
}
