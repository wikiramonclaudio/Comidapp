import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css'],
  moduleId: module.id,
})
export class BottomBarComponent implements OnInit {

  @Input('index') public index: number;
  constructor() { }

  ngOnInit() {
  }

}
