import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName='Sachin Sharma';
  title = 'Angular Search Using ng2-search-filter';
  constructor() { }

  ngOnInit(): void {
  }

}
