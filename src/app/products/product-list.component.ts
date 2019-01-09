import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter = 'cart';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      'productId': 1,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'December 19, 2018',
      'description': '15 Gallon capacity rolling garden cart',
      'price': 32.99,
      'rating': 3.2,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      'productId': 2,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'December 19, 2018',
      'description': 'Curved claw steel hammer',
      'price': 9.99,
      'rating': 4.8,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('Product Component On Init');
  }

  onRatingClicked(message: string): void {
    console.log(message);
    this.pageTitle = 'Product List: ' + message;
  }
}
