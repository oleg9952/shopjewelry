import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { RingsComponent } from './content/rings/rings.component';
import { ProductPageComponent } from './content/product-page/product-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
