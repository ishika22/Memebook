import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userName='Sachin Sharma';
  title = 'Angular Search Using ng2-search-filter';
  
  constructor() { }

  ngOnInit(): void {
  }

}
