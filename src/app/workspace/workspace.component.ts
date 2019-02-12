import { Component, OnInit } from '@angular/core';
import { TaskboardComponent } from '../taskboard/taskboard.component';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  days = [
    {
      date: moment().format('YYYY-MM-DD'),
      meetings: [
        {
          name: 'The meting',
          type: 'sheduled',
          time: '9:00am',
          desc: 'Some random meeting',
          people: ['some@random.mail'],
        },
        {
          name: 'The second',
          type: 'sheduled',
          time: '10:00am',
          desc: 'Some random meeting',
          people: ['some@random.mail'],
        },
        {
          name: 'The third',
          type: 'sheduled',
          time: '11:00am',
          desc: 'Some random meeting',
          people: ['some@random.mail'],
        },
        {
          name: 'New meting',
          type: 'cancelled',
          time: '9:00am',
          desc: 'Some random meeting',
          people: ['some@random.mail'],
        },
        {
          name: 'New meting',
          type: 'resheduled',
          time: '11:00am',
          desc: 'Second random meeting',
          people: ['second@random.mail'],
        }
      ],
      tasks: [{
        type: 'W',
        isFinished: false,
        time: '11:00am',
        title: 'Design Catchup',
        subtitle: 'Subtitle desc',
        content: 'Some large content goes here we should pipe it to char limit like 32 and then show it in details.'
      },
      {
        type: 'W',
        isFinished: false,
        time: '5:00am',
        title: 'Task 2',
        subtitle: 'some',
        content: 'Content 2'
      },
      {
        type: 'B',
        isFinished: false,
        time: '1:45pm',
        title: 'Task 6',
        subtitle: 'some',
        content: 'Content 6'
      },
      {
        type: 'P',
        isFinished: false,
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
        time: '1:45pm',
        title: 'Task 3',
        subtitle: 'some',
        content: 'Content 3'
      },
      {
        type: 'P',
        isFinished: false,
        time: '2:45pm',
        title: 'Task 4',
        subtitle: 'some',
        content: 'Content 4'
      },
      {
        type: 'P',
        isFinished: false,
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

}
