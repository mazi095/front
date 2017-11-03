import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../_models/product';
import {VendingMachineService} from '../../_services/vending-machine.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [VendingMachineService]
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private vendingMachineService: VendingMachineService) {
  }

  ngOnInit() {
  }

}
