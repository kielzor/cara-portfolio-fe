import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public subTitle = 'Something Something give me all your money';

  constructor() { }

  ngOnInit() {
  }
}
