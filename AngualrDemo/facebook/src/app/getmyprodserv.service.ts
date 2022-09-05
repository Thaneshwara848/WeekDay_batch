import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetmyprodservService {

  constructor(private http:HttpClient) { }

  getAllProd():Observable<any>{

    return this.http.get<any>("http://localhost:9999/getProd");
  }

}
