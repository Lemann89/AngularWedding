import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpService } from '../services/http.service';
import { NavigationModel } from '../models/navigation.model';
import { SectionModel } from '../models/section.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.scss']
})
export class EditHeaderComponent implements OnInit {

  modalRef: BsModalRef;
  model: NavigationModel;
  form: FormGroup;

  constructor(private modalService: BsModalService, private http : HttpService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  submit() {
    const formData = this.form.value as NavigationModel;
    this.http.updateSection(formData).subscribe(res => {
      if( res.ok ) {
        this.modalRef.hide();
        window.location.reload();
      }
    });
  }

  buildForm(): void {
    const content: FormArray = new FormArray([]);
    this.model.content.forEach(item => content.push(
      new FormGroup({
      title: new FormControl(item.title),
      url: new FormControl(item.url)
    })));

    this.form = new FormGroup({
      meta: new FormGroup({
        title: new FormControl(this.model.meta.title),
      }),
      content,
      action: new FormGroup({
        title: new FormControl(this.model.action.title),
        url: new FormControl(this.model.action.url)
      })
    });
  }

  ngOnInit() {
    this.http.getSection().subscribe( res => {
      if( res.ok ) {
        this.model = (res.body as SectionModel).content.filter(item => item.type === 'navigation' )[0] as NavigationModel;
        console.log(this.model);
        this.buildForm();
      }
    });
  }
}
