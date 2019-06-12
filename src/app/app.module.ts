import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BonificoDetailComponent } from './bonifico-detail/bonifico-detail.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }          from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BonificoCreateComponent } from './bonifico-create/bonifico-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BonificoDetailComponent,
    ThankyouComponent,
    BonificoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
