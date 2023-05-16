import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';

@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [CommonModule],
  exports: [ExpansionPanelComponent], // Export the component
})
export class ExpansionPanelModule {}
