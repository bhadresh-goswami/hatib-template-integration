import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import {HttpClient} from '@angular/common/http';
import { Countrymodel } from 'src/app/models/countrymodel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient) { 


    this.http.get("https://restcountries.eu/rest/v2/all").subscribe((res)=>{
      this.countryList = res as Countrymodel[];
    });
  }

  public userModel = new User();

  //https://restcountries.eu/rest/v2/all
  public countryList:Countrymodel[] = [];

  ngOnInit() {


   


  }

}
