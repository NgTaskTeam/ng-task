import { Component, OnInit } from '@angular/core';
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
  days = [
    {
      date: moment().format('YYYY-MM-DD'),
      tasks: [{
        type: 'W',
        isFinished: false,
        isPinned: false,
        time: '11:00am',
        title: 'Design Catchup',
        subtitle: 'Subtitle desc',
        content: 'Some large content goes here we should pipe it to char limit like 32 and then show it in details.'
      },
      {
        type: 'W',
        isFinished: false,
        isPinned: false,
        time: '5:00am',
        title: 'Task 2',
        subtitle: 'some',
        content: 'Content 2'
      },
      {
        type: 'B',
        isFinished: false,
        isPinned: false,
        time: '1:45pm',
        title: 'Task 6',
        subtitle: 'some',
        content: 'Content 6'
      },
      {
        type: 'P',
        isFinished: false,
        isPinned: false,
        time: '8:00pm',
        title: 'Task 7',
        subtitle: 'some',
        content: 'Content 7'
      }]
    },
    {
      date: moment().add(1, 'd').format('YYYY-MM-DD'),
      tasks: [{
        type: 'W',
        isFinished: false,
        isPinned: false,
        time: '1:45pm',
        title: 'Task 3',
        subtitle: 'some',
        content: 'Content 3'
      },
      {
        type: 'P',
        isFinished: false,
        isPinned: false,
        time: '2:45pm',
        title: 'Task 4',
        subtitle: 'some',
        content: 'Content 4'
      },
      {
        type: 'P',
        isFinished: false,
        isPinned: false,
        time: '3:45pm',
        title: 'Task 5',
        subtitle: 'some',
        content: 'Content 5'
      }]
    },
    {
      date: moment().add(2, 'd').format('YYYY-MM-DD'),
      tasks: [{
        type: 'B',
        isFinished: false,
        isPinned: false,
        time: '4:45pm',
        title: 'Task 8',
        subtitle: 'some',
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
