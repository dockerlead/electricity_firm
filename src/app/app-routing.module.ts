import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Sign1Component } from './sign/sign1/sign1.component';
import { Sign2Component } from './sign/sign2/sign2.component';
import { Sign3Component } from './sign/sign3/sign3.component';
import { Sign4Component } from './sign/sign4/sign4.component';
import { Sign5Component } from './sign/sign5/sign5.component';


const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sign1/:param',
    component: Sign1Component
  },
  {
    path: 'sign2/:param',
    component: Sign2Component
  },
  {
    path: 'sign3/:param',
    component: Sign3Component
  },
  {
    path: 'sign4/:param',
    component: Sign4Component
  },
  {
    path: 'sign5/:param',
    component: Sign5Component
  },
  
]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
