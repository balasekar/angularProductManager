import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
