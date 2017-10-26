import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCardModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,HttpModule,MatButtonModule,MatCardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
