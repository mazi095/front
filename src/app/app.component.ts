import {Component} from '@angular/core';
import {VendingMachineService} from './_services/vending-machine.service';
import {Product} from './_models/product';
import {Transaction} from './_models/transaction';
import {Coin} from './_models/coin';
import {VendingMachineSystemService} from './_services/vending-machine-system.service';
import {USER_COINS} from './_fixtures/mock-user-coin-list';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CommonDialogComponent} from './_components/common-dialog/common-dialog.component';

@Component({
  moduleId: 'app',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VendingMachineService, VendingMachineSystemService]
})
export class AppComponent {
  title = 'VM';

  products:Product[];

  vmCoinList:Coin[] = [];

  userCoinList:Coin[] = [];

  balance:number = 0;

  errorObj:any;

  constructor(private vendingMachineService:VendingMachineService,
              private vendingMachineSystemService:VendingMachineSystemService,
              public dialog:MatDialog) {
    this.getProductList();
    this.getBalance();
    this.getVMCoinList();
    this.getUserCoinList();
  }

  getUserCoinList():void {
    this.userCoinList = USER_COINS;
  }

  getProductList():void {
    this.vendingMachineService.getProductList().subscribe(
      data => {
        this.products = data;
      },
      error => {
        this.errorObj = error;
      }
    );
  }

  getBalance():void {
    this.vendingMachineService.getBalance().subscribe(
      data => {
        let balance = 0;
        data.forEach(function (transaction:Transaction) {
          balance += transaction.coin_denomination;
        });
        this.balance = balance;
      },
      error => {
        this.errorObj = error;
      }
    );
  }

  getVMCoinList():void {
    this.vendingMachineSystemService.getCoinList().subscribe(
      data => {
        this.vmCoinList = data;
      },
      error => {
        this.errorObj = error;
      }
    );
  }

  getOddMoney():void {
    this.vendingMachineService.returnCoin().subscribe(
      data => {
        this.recountUserCoin(data);
        this.getBalance();
      }
    );
  }

  onCoinSend($dialogRef:MatDialogRef<CommonDialogComponent>):void {
    this.getBalance();
    $dialogRef.close();
  }

  onBuyingProduct($transactions:Transaction[]):void {
    this.getBalance();
    this.getProductList();
    this.getVMCoinList();
    this.recountUserCoin($transactions);
  }

  resetData():void {
    this.vendingMachineSystemService.resetData().subscribe(
      function () {
        window.location.reload();
      }
    );
  }

  robVM():void {
    this.vendingMachineSystemService.robVM().subscribe(
      function () {
        window.location.reload();
      }
    );
  }

  private recountUserCoin($transactions:Transaction[]) {
    $transactions.forEach(transaction => {
      this.userCoinList.find(function (element:Coin) {
        if (element.denomination === transaction.coin_denomination) {
          element.quantity++;
          return true;
        }
        return false;
      });
    });
  }

}
