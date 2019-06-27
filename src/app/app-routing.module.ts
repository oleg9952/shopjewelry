import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { RingsComponent } from './content/rings/rings.component';
import { ProductPageComponent } from './content/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent
  },
  {
    path: 'content/home',
    component: HomeComponent
  },
  {
    path: 'content/rings',
    component: RingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
