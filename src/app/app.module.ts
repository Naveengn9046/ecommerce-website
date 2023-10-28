import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ImagePopupComponent } from './image-popup/image-popup.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ImagePopupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule], // Add FormsModule here
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
