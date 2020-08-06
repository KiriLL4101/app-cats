import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.scss']
})
export class CardTileComponent{

  constructor() { }

  @Input() cats;
  @Output() clicLiked = new EventEmitter()

  onClick(i) {
    this.clicLiked.emit(this.cats.map((item,idx) => {
      if(idx === i){
        return {...item, isLiked:!item.isLiked}
      }
      return item
    }))
  }
}
