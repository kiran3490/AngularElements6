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
    const randomText = this.generateRandomText(8);
    myclient.Id = Math.floor(Math.random() * 8);
    myclient.Name = randomText;
    myclient.Image = 'https://robohash.org/' + randomText + '?size=50x50&set=set1';
    this.myClientDataService.updateData(myclient);
  }


  generateRandomText(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
