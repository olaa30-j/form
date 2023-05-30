import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { CoreService } from '../core/core.service';
import { UsersService } from '../services/users.service';
// import { Router } from 'express';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})


export class DialogComponent {
  userForm: FormGroup;
  // data:FormData;
  startDate = new Date(1990, 0, 1);
  newUsers = new FormControl('');

  constructor(
    // private route : Router ,
    private _fb: FormBuilder,
    private _usersServices:UsersService,
    private _dialogRef: MatDialogRef<DialogComponent>,
    ) {

      // this.data = new FormData()
    this.userForm = this._fb.group({
      userName:[''],
      age: [''],
      email: [''],
      phoneNumber:[''],
      dob:[''],
      address: [''],
      babies: [''],
    });
  }

  onFormSubmit(){
    // console.log('Form data is ', this.userForm.value);

    // for(const key in this.userForm.controls){
    //   this.data.append(key,this.userForm.controls[key].value)
    // }

    //   this._usersServices.addUser(this.data).subscribe({
    //     next: (res) => {
    //       if(res.success)
    //       {
    //         alert('added');
    //         this._dialogRef.close();
    //       }
    //       else
    //       {
    //         console.error(res.message);
    //       }
    //     }
    //   })
    }
  }

