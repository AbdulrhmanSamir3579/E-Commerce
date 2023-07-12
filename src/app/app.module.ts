import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { PopoverModule } from "ngx-bootstrap/popover";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { CartComponent } from "./components/cart/cart.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { BrandsComponent } from "./components/brands/brands.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { ProductdetailsComponent } from "./components/productdetails/productdetails.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HomesliderComponent } from "./components/homeslider/homeslider.component";
import { CategorysliderComponent } from "./components/categoryslider/categoryslider.component";
import { ProductSearchPipe } from "./pipes/product-search.pipe";
import { ToastrModule } from "ngx-toastr";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ScrollTrackerDirective } from "./scroll.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CartComponent,
    CategoriesComponent,
    BrandsComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    NotfoundComponent,
    ProductdetailsComponent,
    HomesliderComponent,
    CategorysliderComponent,
    ProductSearchPipe,
    CheckoutComponent,
    ScrollTrackerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    CommonModule,
    PopoverModule.forRoot(),
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
