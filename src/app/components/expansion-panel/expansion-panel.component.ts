import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent {
  @Input() panelTitle = '';
  expanded: boolean = false;
  @Output() expandedEvent = new EventEmitter<any>();

  togglePanel() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.expandedEvent.emit(this);
    }
  }
}
