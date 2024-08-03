import { Component, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Constants } from '../../constants';
import { GlobalService } from '../../services/global.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  Language: any;
  ngDoCheck(): void { }
  onSignOut = new EventEmitter();
  public headerStyle1 = false;
  public headerStyle2 = true;
  
  theme = 'my-theme';
  userData: any;
  cartData: any;
  cart: any;
  colorConstant: any;
  total: any;
  constructor(public l: LanguageService, public dialog: MatDialog, private router: Router, 
     public globalService: GlobalService) { }

  ngOnInit() {
    this.Language = localStorage.getItem(Constants.SELECTED_LANGUAGE_CODE);
    if (this.Language == null) {
      this.Language = 'en_in';
    }
    this.globalService.LanguageCode = this.Language;

    this.getColorConstants();

    

  
  }
 
  getColorConstants() {
    this.colorConstant = {};
    this.colorConstant.header = {};
    this.colorConstant.header.background = '#1976d2';
    this.colorConstant.header.color = '#1976d2';
    this.colorConstant.Button = {
      // 'background-color': "#1976d2",
      'color': '#fff',
      'font-size': '14px'
      // 'border-bottom': '1px solid #fff',
      // 'margin-right': '10px'
    };

  }
 


  signOut() {

   
    this.router.navigate(['login']);
  }

  ChangeLanguage(event: { srcElement: { value: any; }; }) {
    const val = event.srcElement.value;
    localStorage.setItem(Constants.SELECTED_LANGUAGE_CODE, val);
    this.globalService.LanguageCode = val;
  }

}

