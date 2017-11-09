import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Coin} from '../../_models/coin';
import {MatDialog, MatDialogRef} from '@angular/material';
import {VendingMachineService} from '../../_services/vending-machine.service';
import {CommonDialogComponent} from '../common-dialog/common-dialog.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  @Input() coin: Coin;

  @Output() onCoinSend = new EventEmitter<MatDialogRef<CommonDialogComponent>>();

  config = {
    disableClose: true,
    hasBackdrop: true,
  };

  constructor(public dialog: MatDialog, private vendingMachineService: VendingMachineService) {
  }

  send(): void {
    if (this.coin.quantity > 0) {
      Object.assign(this.config, {id: 'loading-dialog'});
      this.dialog.open(CommonDialogComponent, this.config);
      this.vendingMachineService.addCoin(this.coin.denomination).subscribe(
        data => {
          if (data.status === 'injected') {
            this.coin.quantity--;
            this.onCoinSend.emit(this.dialog.getDialogById('loading-dialog'));
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  ngOnInit() {
  }
}
