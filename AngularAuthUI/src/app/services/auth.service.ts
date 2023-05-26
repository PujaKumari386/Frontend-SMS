import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "https://localhost:44311/api/Login/"
  constructor(private http : HttpClient) { }

  login(roleObj: any){
    return this.http.post<any>('${this.baseUrl}authentication',roleObj);
  }
}
