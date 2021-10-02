import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() data: any;
  keys= [];
  values= [];
  parsedData: any;
  constructor() {}

  ngOnInit(): void {
    this.parsedData = JSON.parse(this.data);
    this.keys=Object.keys(this.parsedData[0]);
  }
  ngDoCheck() {
     this.parsedData = JSON.parse(this.data);
     this.keys=Object.keys(this.parsedData[0]);
  }

}
