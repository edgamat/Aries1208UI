import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export class ReadingModel {
  id: number;
  pressure: number;
  oxygen: number;
  temperature: number;
}

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private httpClient: HttpClient) { }

  getLatestReading(): Observable<ReadingModel> {
    const data = new ReadingModel();
    data.pressure = 12.58;
    data.oxygen = 79.48;
    data.temperature = 21.48;

    // return of(data);

    return this.httpClient.get<ReadingModel>(`${environment.sensor.apiPath}/reading`);
  }
}
