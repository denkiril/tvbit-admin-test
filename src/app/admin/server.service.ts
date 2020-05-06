import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Object } from './object';
import { OBJECTS } from './mock-objects';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }

  postSerial(serial: string): Observable<any> {
    console.log(`post serial: ${serial}`);

    return of();
  }

  getObjects(): Observable<Object[]> {
    return of(OBJECTS);
  }
}
