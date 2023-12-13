import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './features/main/main.component';
import { ButtonPanelComponent } from './shared/components/button-panel.component';
import { ChartDirective } from './shared/directives/chart.directive';
import { QuitModalComponent } from './shared/components/quit-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToasterComponent } from './shared/components/toaster.component';
import { CounterComponent } from './shared/components/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonPanelComponent,
    ChartDirective,
    QuitModalComponent,
    ToasterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
