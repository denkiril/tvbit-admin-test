import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerialService {

  constructor() { }

  postSerial(serial: string): Observable<any> {
    console.log(`inside postSerial: ${serial}`);

    return of(serial);
  }
}
