import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleLayout = 'table';

  changeLike(e){
    this.cats = e
  }
   cats = [
    {
      "name": "Shironeko",
      "src": "//html.ftpes.ru/FrontEndTest/Shironeko.jpg",
      "description": "Самый счастливый и сонный кот в мире",
      "isLiked": false
    },
    {
      "name": "Garfi",
      "src": "//html.ftpes.ru/FrontEndTest/Garfi.jpg",
      "description": "Самый злой кот в мире",
      "isLiked": false
    },
    {
      "name": "Sam",
      "src": "//html.ftpes.ru/FrontEndTest/Sam.jpg",
      "description": "У кота Сэма есть потрясающие брови",
      "isLiked": false
    },
    {
      "name": "Snoopy",
      "src": "//html.ftpes.ru/FrontEndTest/Snoopy.jpg",
      "description": "Самый очаровательный котик",
      "isLiked": false
    },
    {
      "name": "Maru",
      "src": "//html.ftpes.ru/FrontEndTest/Maru.jpg",
      "description": "Повелитель коробок",
      "isLiked": false
    },
    {
      "name": "Venus",
      "src": "//html.ftpes.ru/FrontEndTest/Venus.jpg",
      "description": "Кошка с двумя лицами",
      "isLiked": false
    },
    {
      "name": "Lil Bub",
      "src": "//html.ftpes.ru/FrontEndTest/Lil_Bub.jpg",
      "description": "Вечный котёнок",
      "isLiked": false
    },
    {
      "name": "Banye",
      "src": "//html.ftpes.ru/FrontEndTest/Banye.jpg",
      "description": "Всегда удивлённый кот",
      "isLiked": false
    },
    {
      "name": "Grumpy Cat",
      "src": "//html.ftpes.ru/FrontEndTest/Grumpy_Cat.jpg",
      "description": "Сердитый котик",
      "isLiked": false
    },
    {
      "name": "Hamilton",
      "src": "//html.ftpes.ru/FrontEndTest/Hamilton.jpg",
      "description": "Кот-хипстер",
      "isLiked": false
    },
    {
      "name": "Nala",
      "src": "//html.ftpes.ru/FrontEndTest/Nala.jpg",
      "description": "Кошка, которая всегда в шоке",
      "isLiked": false
    },
    {
      "name": "Colonel Meow",
      "src": "//html.ftpes.ru/FrontEndTest/Colonel_Meow.jpg",
      "description": "Кот с самой длинной шерстью",
      "isLiked": false
    }
  ]
}
