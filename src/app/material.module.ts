import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatToolbarModule],
})

export class MaterialModule {}
