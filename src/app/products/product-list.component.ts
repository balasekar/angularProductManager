import {Component} from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'cart';
  products: IProduct[] = [
    {
      'productId': 1,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'December 19, 2018',
      'description': '15 Gallon capacity rolling garden cart',
      'price': 32.99,
      'rating': 4.2,
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

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
