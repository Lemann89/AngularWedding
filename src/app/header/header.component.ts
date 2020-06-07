import { Component, OnInit} from '@angular/core';
import * as model from '../models/section.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean = false;

  toggleMenu(){
   this.status = !this.status;
  };

  model: model.Content;

  constructor(private http : HttpService) { };

  ngOnInit() {
    this.http.getSection().subscribe( res => {
      if( res.ok ) {
        this.model = (res.body as model.SectionModel).content.filter(item => item.type === 'navigation' )[0];
      }
    }
    );
  }
}
