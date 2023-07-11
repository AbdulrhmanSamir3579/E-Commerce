import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ProductsService {
    baseUrl: string = "https://ecommerce.routemisr.com/";

    constructor(private _HttpClient: HttpClient) {
    }

    getProducts(): Observable<any> {
        return this._HttpClient.get(this.baseUrl + "api/v1/products");
    }

    getProductsDetails(id: string): Observable<any> {
        return this._HttpClient.get(this.baseUrl + `api/v1/products/${id}`);
    }

    getCategories(): Observable<any> {
        return this._HttpClient.get(this.baseUrl + "api/v1/categories");
    }
}
