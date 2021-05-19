import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from './../environments/environment';
let  baseApiUrl:string = "http://172.16.16.147:3001";

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http:HttpClient) { }
  
  upload(file: string | Blob):Observable<any> {
    const formData = new FormData(); 
    formData.append("file", file);
    let url =`${environment.apiURL}/api/savefile`
    return this.http.post(url, formData)
}


  getFilesData( ){
    let url =`${environment.apiURL}/api/getFilesData`;
    return this.http.get(url) 
  }


}
