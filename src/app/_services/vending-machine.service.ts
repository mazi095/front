import {Injectable} from '@angular/core';
import {Transaction} from '../_models/transaction';
import {BuyProductResponse} from '../_models/buy-product-response';
import {Product} from '../_models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VendingMachineService {

  constructor(private http: HttpClient) {
  }

  addCoin($denomination): Observable<Transaction> {
    return this.http.get('/back/add_coin/' + $denomination);
  }

  buyProduct($id): Observable<BuyProductResponse> {
    return this.http.get('/back/buy_product/' + $id);
  }

  returnCoin(): Observable<Transaction[]> {
    return this.http.get('/back/return_coin/');
  }

  getBalance(): Observable<Transaction[]> {
    return this.http.get('/back/balance/');
  }

  getProductList(): Observable<Product[]> {
    return this.http.get('/back/product_list/');
  }
}
