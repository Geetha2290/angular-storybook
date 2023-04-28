import { Injectable } from '@angular/core';
import { Service2Service } from './service2.service';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private service2: Service2Service) {}

   public logService(): void {
    this.service2.logservice();
   }
}
