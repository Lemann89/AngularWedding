import { Component, OnInit} from '@angular/core';
import * as model from '../models/section.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {

  model: model.Content;

  constructor(private http : HttpService) { };

  ngOnInit() {
    this.http.getSection().subscribe( res => {
      if( res.ok ) {
        this.model = (res.body as model.SectionModel).content.filter(item => item.type === 'coach' ).pop();
      }
    });
  }

}
