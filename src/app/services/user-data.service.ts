import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
baseUrl ='https://localhost:44391/api/Contacts';
  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.baseUrl);
  }
  create(data:any)
  {
    return this.http.post(this.baseUrl,data)
  }
  delete(id:any)
  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  edit(id:any,data:any)
  {
    return this.http.put(`${this.baseUrl}/${id}`,data)
  }
}
