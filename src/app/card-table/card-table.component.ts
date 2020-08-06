import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent {

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
