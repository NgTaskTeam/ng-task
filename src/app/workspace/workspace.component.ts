import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskboardComponent } from '../taskboard/taskboard.component';
import * as moment from 'moment-timezone';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})

export class WorkspaceComponent implements OnInit, OnDestroy {
  private taskSubscription: Subscription = new Subscription();
  private meetingsSubscription: Subscription = new Subscription();
  private filterSubscription: Subscription = new Subscription();

  taskForm = this.fb.group({
    date: [''],
    time: [''],
    title: [''],
    content: [''],
    type: [''],
  });
  days = [];
  meetings = {};
  filters: {
    isFinished: any,
    type: any
  } = {
      isFinished: null,
      type: null,
    };

  constructor(private dataServiceService: DataServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.taskSubscription = this.dataServiceService.getTasks().subscribe(tasks => {
      this.days = tasks.filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD'));
    });

    this.meetingsSubscription = this.dataServiceService.getMeetings().subscribe(meetings => {
      this.meetings = {
        scheduled: meetings.scheduled.filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')),
        rescheduled: meetings.rescheduled.filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')),
        cancelled: meetings.cancelled.filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')),
      };
    });

    this.filterSubscription = this.dataServiceService.getFilters().subscribe(f => {
      this.filters = f;
    });
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
    this.meetingsSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

  chechSelectedFilter(filter: string) {
    switch (filter) {
      case 'all':
        return this.filters.isFinished === null;
      case 'finished':
        return this.filters.isFinished === true;
      case 'not-finished':
        return this.filters.isFinished === false;
      case 'all-type':
        return !this.filters.type;
      case 'work':
        return this.filters.type === 'W';
      case 'buisness':
        return this.filters.type === 'B';
      case 'personal':
        return this.filters.type === 'P';
      default:
        break;
    }
  }

  changeFilters(filter: string) {
    switch (filter) {
      case 'all':
        this.dataServiceService.setFilters({
          ...this.filters,
          isFinished: null,
        });
        break;
      case 'finished':
        this.dataServiceService.setFilters({
          ...this.filters,
          isFinished: this.filters.isFinished === true ? null : true,
        });
        break;
      case 'not-finished':
        this.dataServiceService.setFilters({
          ...this.filters,
          isFinished: this.filters.isFinished === false ? null : false,
        });
        break;
      case 'all-type':
        this.dataServiceService.setFilters({
          ...this.filters,
          type: null,
        });
        break;
      case 'work':
        this.dataServiceService.setFilters({
          ...this.filters,
          type: this.filters.type === 'W' ? null : 'W',
        });
        break;
      case 'buisness':
        this.dataServiceService.setFilters({
          ...this.filters,
          type: this.filters.type === 'B' ? null : 'B',
        });
        break;
      case 'personal':
        this.dataServiceService.setFilters({
          ...this.filters,
          type: this.filters.type === 'P' ? null : 'P',
        });
        break;
      default:
        break;
    }
  }

  onSubmit() {
    this.dataServiceService.addTasks(this.taskForm.value);
    this.taskForm.reset();
  }

  onReset() {
    this.taskForm.reset();
  }
}
