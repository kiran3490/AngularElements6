import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-collection-component',
  templateUrl: './widget-collection-component.component.html',
  styleUrls: ['./widget-collection-component.component.css']
})
export class WidgetCollectionComponentComponent implements OnInit {
  public special = false;
  constructor() { }

  ngOnInit() {
  }

  btnClick() {
    this.special = !this.special;
  }

}
