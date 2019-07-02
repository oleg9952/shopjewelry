import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './header/top-nav/top-nav.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { HomeComponent } from './content/home/home.component';
import { RingsComponent } from './content/rings/rings.component';
import { ProductPageComponent } from './content/product-page/product-page.component';
import { SignInUpComponent } from './content/sign-in-up/sign-in-up.component';
import { CheckoutComponent } from './content/checkout/checkout.component';
// import { SearchComponent } from './content/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    TopNavComponent,
    HeaderContentComponent,
    MainNavComponent,
    HomeComponent,
    RingsComponent,
    ProductPageComponent,
    SignInUpComponent,
    CheckoutComponent,
    // SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
