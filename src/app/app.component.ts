import {Component} from '@angular/core';
import {VendingMachineService} from './_services/vending-machine.service';
import {Product} from './_models/product';
import {Transaction} from './_models/transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VendingMachineService]
})
export class AppComponent {
  title = 'VM';
  products: Product[];

  balance: number;

  errorObj: any;

  constructor(private vendingMachineService: VendingMachineService) {
    this.getProductList();
    this.getBalance();
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
    this.balance  = 0;
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


}
