import { Component, OnInit, Input } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  selected = 'Design Catchup';
  normalOptions: SortablejsOptions = {
    group: 'tasks'
  };
  @Input() days: any;

  constructor() { }

  ngOnInit() {
  }

  getLabel(date): string {
    if (moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
      return 'Today';
    } else if (moment(date).format('YYYY-MM-DD') === moment().add(1, 'd').format('YYYY-MM-DD')) {
      return 'Tomorrow';
    }

    return null;
  }

}
