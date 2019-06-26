import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { RingsComponent } from './content/rings/rings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
