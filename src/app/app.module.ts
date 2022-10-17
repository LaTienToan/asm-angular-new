import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductCreateComponent,
    ProductEditComponent,
    DetailProductComponent,
    HomeAdminComponent,
    HeaderComponent,
    FooterComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
