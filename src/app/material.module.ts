import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatExpansionModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatExpansionModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatExpansionModule],
})

export class MaterialModule {}
