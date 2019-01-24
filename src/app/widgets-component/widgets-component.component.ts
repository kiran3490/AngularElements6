import { Component, OnInit } from '@angular/core';
import { MyClientDataService } from '../service/my-client-data.service';
import { MyClient } from '../my-client-component/my-client.interface';

@Component({
  selector: 'app-widgets-component',
  templateUrl: './widgets-component.component.html',
  styleUrls: ['./widgets-component.component.css']
})
export class WidgetsComponentComponent implements OnInit {

  constructor(private myClientDataService: MyClientDataService) { }

  ngOnInit() {
  }

  btnClick() {
    const myclient = {} as MyClient;
    myclient.Id = 12;
    myclient.Name = 'TTTT';
    myclient.Image = 'https://robohash.org/omnisaliquamrerum.jpg?size=50x50&set=set1';
    this.myClientDataService.updateData(myclient);
  }

}
