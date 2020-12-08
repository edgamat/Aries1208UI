import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import { ReadingModel, SensorService } from 'src/app/shared/sensor.service';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {

  latestReading$: Observable<ReadingModel>;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.latestReading$ = interval(5000)
    .pipe(
      startWith(0),
      switchMap(() => this.sensorService.getLatestReading())
    );
  }

}
