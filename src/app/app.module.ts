import {InjectionToken, NgModule} from '@angular/core';
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
import { BlinkDirective } from './shared/directives/blink.directive';
import { BoxComponent } from './shared/components/box.component';
import { OddEvenDirective } from './shared/directives/odd-even.directive';
import { StopDirective } from './shared/directives/stop.directive';
import { ModalDirective } from './shared/directives/modal.directive';
import { MyIfDirective } from './shared/directives/my-if.directive';
import { RepeatDirective } from './shared/directives/repeat.directive';
import { ObjForDirective } from './shared/directives/obj-for.directive';
import { RateComponent } from './shared/components/rate.component';
import { RateItemComponent } from './shared/components/rate-item.component';
import {AuthService} from './shared/services/auth.service';
import {Auth2Service} from './shared/services/auth2.service';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {counterFeature} from './shared/store/reducers/counter.reducer';

const auth = new Auth2Service();

export const token = new InjectionToken<string>('token');


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonPanelComponent,
    ChartDirective,
    QuitModalComponent,
    ToasterComponent,
    CounterComponent,
    BlinkDirective,
    BoxComponent,
    OddEvenDirective,
    StopDirective,
    ModalDirective,
    MyIfDirective,
    RepeatDirective,
    ObjForDirective,
    RateComponent,
    RateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({[counterFeature.name]: counterFeature.reducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
