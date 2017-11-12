import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../_models/product';
import {VendingMachineService} from '../../_services/vending-machine.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {CommonDialogComponent} from '../common-dialog/common-dialog.component';
import {BuyProductResponse} from '../../_models/buy-product-response';
import {ErrorDialogComponent} from '../common-dialog/error-dialog.component';
import {Transaction} from '../../_models/transaction';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [VendingMachineService]
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output() onBuyingProduct = new EventEmitter<Transaction[]>();

  constructor(public dialog: MatDialog, private vendingMachineService: VendingMachineService) {
  }

  config = {
    disableClose: true,
    hasBackdrop: true,
  };

  ngOnInit() {
  }

  buy(): void {
    if (this.product.quantity > 0) {
      const loadinDialog = this.dialog.open(CommonDialogComponent, this.config);
      this.vendingMachineService.buyProduct(this.product.id).subscribe(
        data => {
          const productComponetn = this;
          loadinDialog.afterClosed().subscribe(
            function () {
              productComponetn.onBuyingProduct.emit(data.odd_money);
              productComponetn.dialog.open(ProductDialogComponent, Object.assign({id: 'product-dialog', data: data}, this.config));
            }
          );
          loadinDialog.close();
        },
        error => {
          const productComponent = this;
          loadinDialog.afterClosed().subscribe(
            function () {
              if (error.status === 406 ){
                productComponent.dialog.open(ErrorDialogComponent, Object.assign(
                  {id: 'error-dialog', data: error.error},
                  productComponent.config));
              }else{
                console.log(error);
              }
            }
          );
          loadinDialog.close();
        }
      );
    }
  }

}


@Component({
  moduleId: 'product-dialog',
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
})
export class ProductDialogComponent {
  constructor(public dialogRef: MatDialogRef<ProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BuyProductResponse) {
  }
}
