import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-widget-collection-component',
  templateUrl: './widget-collection-component.component.html',
  styleUrls: ['./widget-collection-component.component.css']
})
export class WidgetCollectionComponentComponent implements OnInit {
  public special = false;
  private dynamicComponent1 = '<app-dynamic></app-dynamic>';

  public alert = DynamicComponent;
  constructor() {
  }

  ngOnInit() {
  }

  btnClick() {
    this.special = !this.special;
  }

}
