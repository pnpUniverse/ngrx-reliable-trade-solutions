import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
const { fileLocation } = environment;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  loginForm: FormGroup;
  images = [];
  _id: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginError = '';
  files : any;
  filesrc = [];

  ngOnInit() {
    this.buildForm();
    this.authService.retrieveBySlug('home', 'home').subscribe((res) => {
      if(res && res['data'] && res['data']['_id']){
        this._id = res['data']['_id'];
        for(let srcs of res['data']['banner_image_path']){
          this.filesrc.push(`${fileLocation}`)
        }
        this.loginForm.patchValue({
          name: res['data']['name'],
          our_vision: res['data']['our_vision'],
          banner_message: res['data']['banner_message'],
          fileSource: res['data']['banner_image_path']
        });
      }
    });
  }

  buildForm() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      our_vision: ['', [Validators.required]],
      banner_message: ['', [Validators.required]],
      file: ['', [Validators.required]],
      fileSource: ['', [Validators.required]]
    });
  }
  get f() {
    return this.loginForm.value;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.files = [];
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event:any) => {
          this.images.push(event.target.result);
          this.loginForm.patchValue({
            fileSource: this.images
          });
        }
        this.files.push(event.target.files[i]);
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  onLogin() {
    const formData = new FormData();
    ['name', 'our_vision', 'banner_message'].map(d => formData.append(d, this.loginForm.value[d]));
    this.files.forEach(file => formData.append('file', file))
    if(this._id) formData.append('_id', this._id);
    this.authService.landing_page(formData).subscribe((res) => {
      console.log('res: ', res);
      if (res['status']) {
        this.loginError = '';
        this._id =  res['_id'];
        this.router.navigate(['/dashboard']);
      } else {
        this.loginError = res['message'];
      }
    });
  }
}