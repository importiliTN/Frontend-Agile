import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptor, LoginUiModule } from '@importili/login';
import { HomeUserModule } from './home-user/home-user.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderUserComponent } from './header-user/header-user.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AppComponent, HeaderUserComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HomeUserModule,
    LoginUiModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
