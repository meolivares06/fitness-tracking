import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() SidenavToggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  // emitir el evento sidenav_toggle
  onToggleSidenav() {
    this.SidenavToggle.emit();
  }
}
