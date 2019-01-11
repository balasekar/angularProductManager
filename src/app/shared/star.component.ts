import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements  OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} is clicked !`);
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
