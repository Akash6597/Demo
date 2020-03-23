import {Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:"app-fresher",
    templateUrl:"./fresher.component.html"
})

export class FresherComponent{
fresherFormGroup:FormGroup;
educationFormGroup:FormGroup;
fresher=true;
education=false;
    constructor(private formBuilder:FormBuilder){

    }

    ngOnInit(){
        this.fresherFormGroup=this.formBuilder.group({
            name:['',Validators.required],
            email:['',[Validators.required,Validators.email]],
            password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
            mobile:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')])],
            location:['',Validators.compose([Validators.required])],
            privacy:[true,Validators.requiredTrue]
        })
        this.educationFormGroup=this.formBuilder.group({
            qualification:['',Validators.required],
            course:['',Validators.required],
            specialization:['',Validators.required],
            coursetype:['',Validators.required],
            year:['',Validators.required],
            skills:['',Validators.required]
        })
    }
    Submit() {


           this.fresher=false;
           this.education=true;

    }
}