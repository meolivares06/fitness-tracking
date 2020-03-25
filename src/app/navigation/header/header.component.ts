import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() SidenavToggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  // emitir el evento sidenav_toggle
  onToggleSidenav() {
    this.SidenavToggle.emit();
  }
}
