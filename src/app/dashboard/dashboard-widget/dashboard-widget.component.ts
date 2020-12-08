import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.scss']
})
export class DashboardWidgetComponent implements OnInit {

  @Input() title: string;
  @Input() units: string;
  @Input() value: number;
  @Input() limit: number;

  lineWidth = 7;

  constructor() { }

  ngOnInit(): void {
  }

  get percent(): number {
    return this.value ?? 0 / this.limit * 100;
  }

}
