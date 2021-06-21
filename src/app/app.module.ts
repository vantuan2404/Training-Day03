import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppPricePipePipe } from './app-price-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppPricePipePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
