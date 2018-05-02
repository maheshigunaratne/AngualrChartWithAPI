import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from "./app.routes";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { UsersService } from "./services/users.service";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    NgxChartsModule,
    BrowserAnimationsModule ,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
