import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyClient } from './my-client.interface';
import { MyClientDataService } from '../service/my-client-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-client-component',
  templateUrl: './my-client-component.component.html',
  styleUrls: ['./my-client-component.component.css']
})
export class MyClientComponentComponent implements OnInit {
  public jsonData: MyClient[];

  constructor(private myClientDataService: MyClientDataService) { }

  ngOnInit() {
    this.myClientDataService.getData().subscribe(
      (r) => {
        this.jsonData = r as MyClient[];
      }
    );
  }
}
