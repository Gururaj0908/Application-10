import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Constants } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  
  title = 'eSSMS';
  model: any = {};
  loading = false;
  fullImagePath: string;
  openRegister = false;
  onAdd = new EventEmitter();
  colorConstant: any;
 
  theme = 'my-theme';

  @Input()
  public disabled: boolean | undefined;

  @Input()
  public color: 'dark' | 'light' = 'dark';

  @Output()
  public click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  LoginForm = new FormGroup({
  
  });

  RegisterForm = new FormGroup({
  
  });
  remoteService: any;
  returnUrl: any;
navLinks: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private refresh: LoginTimerService,
    public httpClient: HttpClient,
    
    private snackbar: MatSnackBar,
    public l: LanguageService
    // private dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fullImagePath = 'assets/image/essms.png';
  }

  ngOnInit() {
    // reset login status
    this.getColorConstants();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  tabSwitch() {
    this.openRegister = !this.openRegister;
  }
  getColorConstants() {
    this.colorConstant = {};
    this.colorConstant.header = {};
    this.colorConstant.header.background = "#7b1fa2";
    this.colorConstant.header.color = "#7b1fa2";
    this.colorConstant.Button = {
      'background-color': "#67148a",
      'color': '#fff',
      'border-bottom': '1px solid #fff',
      'margin-right': '10px'
    };

  }
  login() {
    this.loading = true;
    this.remoteService.post('/essms-auth/authentication/login',
      { username: this.model.username, password: this.model.password }).subscribe({next:(data: { access_token: any; user_type: string; error: any; })=>
        {
          console.log('Login Response Data ::::::: ' + JSON.stringify(data));
          sessionStorage.setItem(Constants.LOGGED_USER, JSON.stringify(data));
         /*
         temporly disbled
         if (!this.refresh.Running) {
            this.refresh.StartTimer();
          }*/

          // this.router.navigate([this.returnUrl]);
          if (data.access_token) {
            //this.dialogRef.close();
            console.log("data.userType", data.user_type)

            if (data.user_type === 'CUSTOMER') {
              // this.onAdd.emit();
              this.router.navigate(['ecommerce/home']);
            } else {
              this.router.navigate(['admin/dashboard']);
            }
            this.loading = false;
          } else {
            console.error(data.error);
          }

        },
        error :(error:any)=> {
          console.error(error);
          console.log(JSON.stringify(error));
          this.snackbar.open('Login Failed, Reason : ' + error.error.loginError.error_description, '', {
            duration: 2000
          });
          this.loading = false;
        }
      });
  }

  passwordReveal(bool: any, password: { type: string; }) {
    password.type = bool ? 'text' : 'password';
  }


  register() {
    this.loading = true;
    this.remoteService.post('/essms-auth/user/signup', this.model)
      .subscribe({next:()=>
        {
          this.router.navigate(['/login']);
        },
        error :(error:any)=> {
          console.error(error);
          this.loading = false;
        }
    });
  }



  nameError() {
    return this.RegisterForm.hasError('required', ['Name']) ? 'Name is Required' : '';
  }

  emailError() {
    return this.RegisterForm.hasError('required', ['EmailId']) ? 'Email Id is Required' : '';
  }

  mobileNoError() {
    return this.RegisterForm.hasError('required', ['MobileNo']) ? 'Mobile No is Required' : '';
  }

  usernameError() {
    return this.RegisterForm.hasError('required', ['UserName']) ? 'User Name is Required' : '';
  }

  loginUsernameError() {
    return this.LoginForm.hasError('required', ['UserName']) ? 'User Name is Required' : '';
  }

  passwordError() {
    return this.RegisterForm.hasError('required', ['Password']) ? 'Password is Required' : '';
  }

  loginPasswordError() {
    return this.LoginForm.hasError('required', ['Password']) ? 'Password is Required' : '';
  }

  confirmPasswordError() {
    return this.RegisterForm.hasError('required', ['ConfirmPassword']) ? 'Confirm Password is Required' : '';
  }

  post(url: string, data: any) {
    console.log('Posting a data', data);
    return this.httpClient.post<any>('http://localhost:9102/' + url, data).pipe(
      tap( // Log the result or error
        returnData => console.log('Received data', returnData),
        error => console.error(error)
      )
    );
  }

  googleLogin() {
  }

  facebookLogin() {
    //do nothing
  }

  appleLogin() {
    //do nothing
  }

}



