import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  languageFormControl: FormControl = new FormControl('en');
  language: number = 1;

  constructor(private translate: TranslateService) {
    let lan = localStorage.getItem('lan');
    if(lan){
      this.languageFormControl.setValue(lan);   
      translate.setDefaultLang(this.languageFormControl.value);
      translate.use(this.languageFormControl.value);
    }
  }

  ngOnInit() {
    this.languageFormControl.valueChanges.subscribe((res: any) => {
      this.changeLang(res);
      localStorage.setItem('lan',res);
    })
  }

  changeLang(lan: string) {
    localStorage.setItem('lan',lan);
    this.translate.use(lan);
  }
}
