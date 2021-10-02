import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  
  @Output() childButtonEvent = new EventEmitter();
  fileData: any;
  sampleData: any;
  dataSent = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  selectFile(event) {
    this.dataSent = false;
    let that =this;
    this.fileData = event.target.files[0];
    console.log(event.target.files[0]);
    let read = new FileReader();
    read.readAsBinaryString(this.fileData);
    read.onloadend = function () {
      that.sampleData = read.result;
      that.dataSent = true;
    };
  }
  

  BrowseFile() {
    document.getElementById('fileSelect').click();
  }

  ngDoCheck() {
    if(this.dataSent) {
      this.childButtonEvent.emit(this.sampleData);
  }
  }

  

  

}
