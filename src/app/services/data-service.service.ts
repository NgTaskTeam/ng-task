import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment-timezone';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private tasks: BehaviorSubject<{
    date: string;
    tasks: {
      type: string;
      isFinished: boolean;
      time: string;
      title: string;
      content: string;
    }[]
  }[]> = new BehaviorSubject(
    [
      {
        date: moment().format('YYYY-MM-DD'),
        tasks: [{
          type: 'W',
          isFinished: false,
          time: '11:00am',
          title: 'Design Catchup',
          content: 'Some large content goes here we should pipe it to char limit like 32 and then show it in details.'
        },
        {
          type: 'W',
          isFinished: false,
          time: '5:00am',
          title: 'Task 2',
          content: 'Content 2'
        },
        {
          type: 'B',
          isFinished: false,
          time: '1:45pm',
          title: 'Task 6',
          content: 'Content 6'
        },
        {
          type: 'P',
          isFinished: false,
          time: '8:00pm',
          title: 'Task 7',
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
          content: 'Content 3'
        },
        {
          type: 'P',
          isFinished: false,
          time: '2:45pm',
          title: 'Task 4',
          content: 'Content 4'
        },
        {
          type: 'P',
          isFinished: false,
          time: '3:45pm',
          title: 'Task 5',
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
          content: 'Content 8'
        }]
      },
    ]
  );

  private meetings: BehaviorSubject<{
    scheduled: any,
    rescheduled: any,
    cancelled: any,
  }> = new BehaviorSubject({
    scheduled: [
      {
        date: moment().format('YYYY-MM-DD'),
        name: 'The meting',
        time: '9:00am',
        desc: 'Some random meeting',
        people: ['some@random.mail'],
      },
      {
        date: moment().format('YYYY-MM-DD'),
        name: 'The second',
        time: '10:00am',
        desc: 'Some random meeting',
        people: ['some@random.mail'],
      },
      {
        date: moment().format('YYYY-MM-DD'),
        name: 'The third',
        time: '11:00am',
        desc: 'Some random meeting',
        people: ['some@random.mail'],
      }
    ],
    rescheduled: [
      {
        date: moment().format('YYYY-MM-DD'),
        name: 'New meting',
        time: '11:00am',
        desc: 'Second random meeting',
        people: ['second@random.mail'],
      }
    ],
    cancelled: [
      {
        date: moment().format('YYYY-MM-DD'),
        name: 'New meting',
        time: '9:00am',
        desc: 'Some random meeting',
        people: ['some@random.mail'],
      }
    ]
  });

  getTasks() {
    return this.tasks.asObservable();
  }

  addTasks(task: any) {
    const parsedTask = { ...task, date: moment(task.date).format('YYYY-MM-DD'), isFinished: false};
    const date = parsedTask.date;
    delete parsedTask.date;
    const allTasks = [ ...this.tasks.value ];
    const findIndex = allTasks.findIndex(t => moment(t.date).format('YYYY-MM-DD') === date);
    
    if (findIndex !== -1) {
      allTasks[findIndex].tasks.push(parsedTask);
    } else {
      allTasks.push({
        date,
        tasks: [
          parsedTask
        ],
      });
    }

    this.tasks.next(allTasks);
  }

  getMeetings() {
    return this.meetings.asObservable();
  }
}
