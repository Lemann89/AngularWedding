import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor( private tokenService: TokenService ) { }

  logout(){
    this.tokenService.removeToken();
  }

  ngOnInit(): void {
  }

}
