import { Component } from '@angular/core';
import { UserToken } from './models/user-token.model';
import { HttpService } from './services/http.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'edit-site';
  token: boolean;

  constructor(private http : HttpService, private tokenService: TokenService) { };

  
  public loading: boolean;
  
  ngOnInit(): void {
    this.loading = true;
    this.http.getSection().subscribe(
      res => {
        if(res){
          this.loading = false;
        }
      }
    )
    
    this.tokenService.subscribeOnTokenChangeEvent((isTokenValid: boolean) => this.token = isTokenValid);
  }

}
