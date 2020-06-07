import { Component, OnInit} from '@angular/core';
import { HttpService } from '../services/http.service';
import * as model from '../models/section.model';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  servicesCardArray = [
    { img: '../../assets/img/services-1.jpg', 
      title: 'For Bride and Groom', 
      list: [ 'First Dance', 'Parent & Child Dance' ] 
    },
    { img: '../../assets/img/services-2.jpg', 
      title: 'For Guests', 
      list: [ 'Groomsmen Dance', 'Parent Dance', 'Children’s Dance' ] 
    },
    { img: '../../assets/img/services-3.jpg', 
      title: 'Other events',
      list: [ 'Bridal Party Dance', 'Anniversary Dance' ] 
    }
  ]


  model: model.Meta;

  constructor(private http : HttpService) { };

  ngOnInit() {
    this.http.getSection().subscribe( res => {
      if( res.ok ) {
        this.model = (res.body as model.SectionModel).content.filter(item => item.type === 'service' ).pop().meta;
      }
    });
  }
}
