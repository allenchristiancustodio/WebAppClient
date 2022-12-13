import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;


  constructor(
     private formbuilder: FormBuilder,
     private auth: AuthService,
     private router:Router
     ) { }
 
 
  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
        console.log(this.loginForm.value);

        this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res)=>{
            alert(res.message);
            this.router.navigate(['products']);
          },
          error:(err)=>{
            alert(err.error.message)
          }
        })


    }

    else{
    //  this.validateAllFormFields(this.loginForm);
     alert("Your form is invalid");
    }
  }

  //   private validateAllFormFields(formGroup:FormGroup){
  //  Object.keys(formGroup.controls).forEach(field=>{
  //   const control = formGroup.get(field);
  //   if(control instanceof FormControl){
  //     control.markAsDirty({onlySelf: true});

  //   }else if(control instanceof formGroup){
  //     this.validateAllFormFields(control);
  //   }
  //  })
  //   }

}
