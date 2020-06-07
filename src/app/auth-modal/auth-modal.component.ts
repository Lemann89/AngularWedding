import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserToken } from '../models/user-token.model';
import { LoginModel } from '../models/user-login.model';
import { HttpService } from '../services/http.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent implements OnInit {

  modalRef: BsModalRef;
  form: FormGroup;
  authError: boolean = false;

  constructor(
    private modalService: BsModalService,
    private http: HttpService,
    private tokenService: TokenService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  buildForm(){
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required, 
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    const formData = this.form.value as LoginModel;
    this.form.reset();
    this.http.authorization(formData).subscribe(
      (token: UserToken) => {
        this.authError = false;
        this.tokenService.setToken(token);
        this.modalRef.hide();
      },
      (error) => {
        if (error.status != 200) {
          this.authError = true;
        }
      }
    );
  }

  ngOnInit() {
    this.buildForm();
  }
}
