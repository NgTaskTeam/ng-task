import { Component, OnInit, Input } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import * as moment from 'moment-timezone';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  selected = 'Design Catchup';
  @Input() days: any;
  @Input() filters: any;

  constructor(private dataServiceService: DataServiceService) { }

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

  getOptions() {
    const normalOptions: SortablejsOptions = {
      group: 'tasks',
      onUpdate: (event: any) => {
        this.dataServiceService.persistData(this.filters, this.days);
      },
      disabled: this.filters.type !== null || this.filters.isFinished !== null,
    };

    return normalOptions;
  }

}
