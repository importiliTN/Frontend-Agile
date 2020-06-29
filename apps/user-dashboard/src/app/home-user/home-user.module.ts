import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './home-user.component';
import { HomeUserRoutingModule } from './home-user-routing.module';



@NgModule({
  declarations: [HomeUserComponent],
  imports: [
    CommonModule,
    HomeUserRoutingModule
  ],
  exports : [
    HomeUserComponent
  ]
})
export class HomeUserModule { }
