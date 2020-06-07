import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import * as model from '../models/section.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  offersItemsArray = [ 
    { iconClass: 'icon-group' , 
      subtitle: 'Talented Coaches'
    }, 
    { iconClass: 'icon-door' , 
      subtitle: 'Cozy rooms for training'
    }, 
    { iconClass: 'icon-cup' , 
      subtitle: 'Coffee, tea, and cookies'
    }, 
    { iconClass: 'icon-body' , 
      subtitle: 'Good physical form'
    }, 
    { iconClass: 'icon-star' , 
      subtitle: 'Self Confidence and success on your event'
    }, 
    { iconClass: 'icon-friends' , 
      subtitle: 'Exciting emotions and a lot of fun'
    }, 
    { iconClass: 'icon-card' , 
      subtitle: 'Great photos from your event'
    }, 
    { iconClass: 'icon-smile' , 
      subtitle: 'Spend hours together in happiness'
    }
  ]

  model: model.Meta;

  constructor(private http : HttpService) { };

  ngOnInit() {
    this.http.getSection().subscribe( res => {
      if( res.ok ) {
        this.model = (res.body as model.SectionModel).content.filter(item => item.type === 'offer' ).pop().meta;
      }
    });
  }
}
