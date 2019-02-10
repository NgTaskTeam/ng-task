import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  selected = 'Task 1';
  normalOptions: SortablejsOptions = {
    group: 'normal-group'
  };
  days = [
    {
      date: moment().format('YYYY-MM-DD'),
      tasks: [{
        tittle: 'Task 1',
        content: 'Content 1'
      },
      {
        tittle: 'Task 2',
        content: 'Content 2'
      },
      {
        tittle: 'Task 6',
        content: 'Content 6'
      },
      {
        tittle: 'Task 7',
        content: 'Content 7'
      }]
    },
    {
      date: moment().add(1, 'd').format('YYYY-MM-DD'),
      tasks: [{
        tittle: 'Task 3',
        content: 'Content 3'
      },
      {
        tittle: 'Task 4',
        content: 'Content 4'
      },
      {
        tittle: 'Task 5',
        content: 'Content 5'
      }]
    },
    {
      date: moment().add(2, 'd').format('YYYY-MM-DD'),
      tasks: [{
        tittle: 'Task 8',
        content: 'Content 8'
      }]
    },
  ].filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD'));

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
