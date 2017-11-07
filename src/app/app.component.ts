import {Component} from '@angular/core';
import {VendingMachineService} from './_services/vending-machine.service';
import {Product} from './_models/product';
import {Transaction} from './_models/transaction';
import {Coin} from './_models/coin';
import {VendingMachineSystemService} from './_services/vending-machine-system.service';
import {USER_COINS} from './_fixtures/mock-user-coin-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VendingMachineService, VendingMachineSystemService]
})
export class AppComponent {
  title = 'VM';

  products: Product[];

  vmCoinList: Coin[] = [];

  userCoinList: Coin[] = [];

  balance: number;

  errorObj: any;

  constructor(private vendingMachineService: VendingMachineService,
              private vendingMachineSystemService: VendingMachineSystemService) {
    this.getProductList();
    this.getBalance();
    this.getVMCoinList();
    this.userCoinList = USER_COINS;
  }

  getProductList(): void {
    this.vendingMachineService.getProductList().subscribe(
      data => {
        this.products = data;
      },
      error => {
        this.errorObj = error;
      }
    );
  }

  getBalance(): void {
    this.balance = 0;
    this.vendingMachineService.getBalance().subscribe(
      data => {
        let balance = 0;
        data.forEach(function (transaction: Transaction) {
          balance += transaction.coin_denomination;
        });
        this.balance = balance;
      },
      error => {
        this.errorObj = error;
      }
    );
  }

  getVMCoinList(): void {
    this.vendingMachineSystemService.getCoinList().subscribe(
      data => {
        this.vmCoinList = data;
      },
      error => {
        this.errorObj = error;
      }
    );
  }

}
