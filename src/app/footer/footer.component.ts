import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLogo = 'Wedding Dance'

  year = '2020'

  constructor() { }

  ngOnInit(): void {
  }

}
