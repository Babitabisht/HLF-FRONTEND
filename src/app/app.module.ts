import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FileServiceService } from '../services/file-service.service';;
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, FileUploadModule,
    HttpClientModule
  ],
  providers: [FileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
