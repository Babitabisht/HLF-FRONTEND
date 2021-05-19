import { Component, EventEmitter, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { FileServiceService } from '../services/file-service.service';
const URL = 'http://localhost:3000/fileupload/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hlf-ui';
  message:string='';
  filesData:any[]=[];


  constructor(private FileServiceService: FileServiceService) { }

  ngOnInit() {
  this.FileServiceService.getFilesData().subscribe((result:any) => {
    console.log("this is result===>",result)
    this.filesData = result;
    

  });
  }

  public uploader: FileUploader = new FileUploader({
    // url: URL,
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']
    });



  public onFileSelected(event: File[]) {
    const file: File = event[0];
    console.log(file);
    this.FileServiceService.upload(file).subscribe(
      (result: any) => {
        console.log("result====>",result)
          if  (typeof (result) === 'object') {
            this.message= result.myMessage;
            this.FileServiceService.getFilesData().subscribe((result:any) => {
              console.log("this is result===>",result)
              this.filesData = result;
              
          
            });
          }
      }
  );
}
}
