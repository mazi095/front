import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Coin} from '../_models/coin';

@Injectable()
export class VendingMachineSystemService {

  constructor(private http: HttpClient) { }

  getCoinList(): Observable<Coin[]> {
    return this.http.get('/back/system/vm_coin_list/');
  }

  resetData(): Observable<boolean> {
    return this.http.get('/back/system/reset_data/');
  }

  robVM(): Observable<boolean> {
    return this.http.get('/back/system/rob_vm/');
  }

}
