import {Product} from './product';
import {Transaction} from './transaction';

export class BuyProductResponse {
  product: Product;
  odd_money: Transaction[];
}
