import { Component, OnInit} from '@angular/core';
import { HttpService } from '../services/http.service';
import * as model from '../models/section.model';


@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {

  imgUrl = '../../assets/img/';

  model: model.Meta;

  constructor(private http : HttpService) { };

  ngOnInit() {
    this.http.getSection().subscribe( res => {
      if( res.ok ) {
        this.model = (res.body as model.SectionModel).content.filter(item => item.type === 'info' ).pop().meta;
      }
    });
  }
}
