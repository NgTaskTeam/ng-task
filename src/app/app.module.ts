import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortablejsModule } from 'angular-sortablejs';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { WorkspaceComponent } from './workspace/workspace.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { MeetingsComponent } from './meetings/meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    TaskboardComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    SortablejsModule.forRoot({
      animation: 150,
    }),
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
