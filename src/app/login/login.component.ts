import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:any ;

  formLogin = this.fb.group({
    email: [],
    password: [],
  });
  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.hide = true;
  }

  onLogin(){

  }
  escolherLoja(element){

  }
}
