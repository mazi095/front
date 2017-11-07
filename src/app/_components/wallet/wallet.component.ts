import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../../_models/coin';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  @Input() coin: Coin;

  constructor() {
  }

  ngOnInit() {
  }

}
