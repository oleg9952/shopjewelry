import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { RingsComponent } from './content/rings/rings.component';
import { ProductPageComponent } from './content/product-page/product-page.component';
import { SignInUpComponent } from './content/sign-in-up/sign-in-up.component';
import { CheckoutComponent } from './content/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'content/rings',
    component: RingsComponent
  },
  {
    path: 'product-page/:id',
    component: ProductPageComponent
  },
  {
    path: 'content/sign-in-up',
    component: SignInUpComponent
  },
  {
    path: 'content/checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
