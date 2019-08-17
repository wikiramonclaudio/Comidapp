import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: module.id,
})
export class RegisterComponent implements OnInit {

  constructor(
    public page: Page
  ) { 
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
