import {Product} from './product';
import {Transaction} from './transaction';

export class ByProductResponse {
  product: Product;
  oddMoney: Transaction[];
}
