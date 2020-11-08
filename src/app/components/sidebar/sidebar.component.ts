import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faArrowLeft = faArrowLeft

  @Input() sizeClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
