import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:"app-professional",
    templateUrl:"./professional.component.html"
})

export class ProfessionalComponent{
    professionalFormGroup:FormGroup;
    employmentFormGroup:FormGroup;
    educationFormGroup:FormGroup;
    professional=true;
    employment=false;
    education=false;
    constructor(private formBuilder:FormBuilder){}

    ngOnInit(){
        this.professionalFormGroup=this.formBuilder.group({
            name:['',Validators.required],
            email:['',[Validators.required,Validators.email]],
            password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
            mobile:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')])],
            location:['',Validators.compose([Validators.required])],
            experience:['',Validators.required],
            month:['',Validators.required],
            privacy:[true,Validators.requiredTrue]
        })
        this.employmentFormGroup=this.formBuilder.group({
            designation:['',Validators.required],
            company:['',Validators.required],
            lakhs:['',Validators.required],
            thousand:['',Validators.required],
            location:['',Validators.required],
            skill:['',Validators.required],
            industry:['',Validators.required],
            area:['',Validators.required],
            role:['',Validators.required]
        })
        this.educationFormGroup=this.formBuilder.group({
            qualification:['',Validators.required],
            course:['',Validators.required],
            college:['',Validators.required],
            specialization:['',Validators.required],
            coursetype:['',Validators.required],
            year:['',Validators.required]
        })
        
    }

    register(){
        this.professional=false;
        this.employment=true;
        this.education=false;
    }
    continue(){
        console.log('asaas')
        this.professional=false;
        this.employment=false;
        this.education=true;
    }
}