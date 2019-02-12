import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  @Input() meetings: any;
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

  filterMeetings(criteria: string): number {
    return this.meetings.filter(m => m.type === criteria);
  }

}
