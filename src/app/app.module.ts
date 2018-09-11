import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StocksComponent } from './stocks/stocks.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StocksComponent,
    UsersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
