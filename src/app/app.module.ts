import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CardTileComponent } from './card-tile/card-tile.component';
import { CardTableComponent } from './card-table/card-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTileComponent,
    CardTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
