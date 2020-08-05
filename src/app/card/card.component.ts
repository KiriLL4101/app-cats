import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor() { }

  @Input() cat
  @Output() clicLiked = new EventEmitter()

  onClick() {
    this.clicLiked.emit({
      ...this.cat,
      isLiked: !this.cat.isLiked
    })
  }
}
