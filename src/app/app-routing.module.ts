import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from 'src/app/workspace/workspace.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/workspace',
    pathMatch: 'full',
  },
  {
    path: 'workspace',
    component: WorkspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
