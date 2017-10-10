// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { FlightFilterComponent } from './components/flight-filter/flight-filter.component';
import { FlightResultsComponent } from './components/flight-results/flight-results.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightFilterComponent,
    FlightResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
