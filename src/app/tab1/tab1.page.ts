import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis/apis.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  image ='';
  name = '';

  gender = '';
  age = '';
  nationality = '';

  title = "BATA";
  constructor(private apiService:ApisService, private router:Router) {}
  
  ngOnInit() { //on start (same as onCreate)
    this.apiService.getImage().subscribe((response: any) => {
      this.image = response.message;
  });


   
  }

  pressMe()
  {
 //add const because its not public
    const name = this.name.replace(/\s/g, '');
    this.apiService.getGender(name).subscribe((response: any) => {
      this.gender = response.gender
    });
    this.apiService.getAge(name).subscribe((response: any) => {
      this.age = response.age;
  });
    this.apiService.getNationality(name).subscribe((response: any) => {
      this.nationality = response;
      console.log(this.nationality)
  });
  }

}
