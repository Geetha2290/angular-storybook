import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor(private http: HttpClient) { }

  public logservice(): void {
    this.http.get('');
  }
}
