import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ImgurapiService {

  constructor( private http: HttpClient) { }

  private headers : HttpHeaders = new HttpHeaders({
    'Accept' : '*/*',
    'Authorization' : 'Client-ID 703fc05eb1ecff3',
    
  })

  private headersPost : HttpHeaders = new HttpHeaders({
    'Content-Type' : 'multipart/form-data; boundary=<calculated when request is sent>',
    'Accept' : '*/*',
    'Authorization' : 'Client-ID 703fc05eb1ecff3',
    
  })

  private url:string="https://api.imgur.com/3"

  public getImages(){
    return this.http.get(`${this.url}/gallery/top/top/day/1?showViral=false&mature=false`,{headers:this.headers})
  }

  public uploadImage(body){
    return this.http.post(`${this.url}/image`,body,{headers:this.headers},)
  }

}
