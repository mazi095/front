import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../../_models/coin';

@Component({
  selector: 'app-wallet-vm',
  templateUrl: './wallet-vm.component.html',
  styleUrls: ['./wallet-vm.component.css']
})
export class WalletVmComponent implements OnInit {

  @Input() coin: Coin;

  constructor() {
  }

  ngOnInit() {
  }

}
