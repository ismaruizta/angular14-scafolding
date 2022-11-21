import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHomeComponent } from './pages/public/home/home.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicHomeComponent
  ],
  exports:[
  ],
  schemas:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
