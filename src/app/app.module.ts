import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';

/*Until you have a web server that can handle requests for hero data, 
the HTTP client will fetch and save data from a mock service, the in-memory web API.*/
//use npm install angular-in-memory-web-api --save to get web api
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';




@NgModule({
	imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
],
  declarations: [
  AppComponent,
  DashboardComponent,
  HeroDetailComponent,
  HeroesComponent
],
providers: [HeroService],
bootstrap: [AppComponent]
  
})
export class AppModule { }
