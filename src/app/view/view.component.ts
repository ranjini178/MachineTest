import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  {

  broswseData: any;

  receivedMessageHandler(data) {
    this.broswseData = data;
  }



  
  

}
