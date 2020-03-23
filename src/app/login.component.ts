import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.modal';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html'
})

export class LoginComponent{
    user:User=new User();
    loginFormGroup:FormGroup;
    login=false;
    constructor(private formBuilder:FormBuilder){}
    ngOnInit(){
        this.loginFormGroup=this.formBuilder.group({
            email:["",Validators.required],
            password:["",Validators.required]
        })
    }
}