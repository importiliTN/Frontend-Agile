import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from '@importili/login';
import { HomeUserModule } from './home-user/home-user.module';



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home-user/home-user.module').then(m => m.HomeUserModule) },
  { path: 'posts', loadChildren:()=>import('@importili/posting').then(m=>m.PostingModule)},
  { path : '**' , redirectTo : 'home' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
