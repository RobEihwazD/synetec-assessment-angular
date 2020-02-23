import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities/cities-list.component';
import { BaseService } from './services/base.service';
import { CitiesEndpoint } from './services/cities/cities-endpoint.service';
import { CitiesService } from './services/cities/cities.service';
import { HttpClientModule } from '@angular/common/http';
import { CityListItemComponent } from './components/cities/city-list-item/city-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    CityListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
