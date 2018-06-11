import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private url='http://localhost:3000/logs/loggings'
  constructor(private http: HttpClient) { }

  postLog(logs):Observable<any>{
    const httpOptions = { 
      headers: new HttpHeaders(
        {'Content-Type':'application/json'}
      )
    } 
    return this.http.post(this.url,logs,httpOptions);
  }

  getLogs():Observable<Array<any>>{
    return this.http.get<Array<any>>(this.url);
  }

}
