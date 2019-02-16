import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskboardComponent } from '../taskboard/taskboard.component';
import * as moment from 'moment-timezone';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})

export class WorkspaceComponent implements OnInit {
  private taskSubscription: Subscription = new Subscription();
  private meetingsSubscription: Subscription = new Subscription();

  days = [];

  meetings = {};

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.taskSubscription = this.dataServiceService.getTasks().subscribe( tasks => {
      this.days = tasks.filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD'));
    });

    this.meetingsSubscription = this.dataServiceService.getMeetings().subscribe( meetings => {
      this.meetings = {
        scheduled: meetings.scheduled.filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')),
        rescheduled: meetings.rescheduled.filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')),
        cancelled: meetings.cancelled.filter(t => moment(t.date).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')),
      };
    });
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
    this.meetingsSubscription.unsubscribe();
  }
}
