import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  @Input() scheduled: any;
  @Input() rescheduled: any;
  @Input() cancelled: any;
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }
}
