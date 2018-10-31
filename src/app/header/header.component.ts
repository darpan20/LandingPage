import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = 'Sahaj Rana';
  email= 'sahajrana@gmail.com';
  constructor() { }

  ngOnInit() {
  }

}
