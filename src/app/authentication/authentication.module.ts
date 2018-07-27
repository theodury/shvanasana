import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule }    from '@angular/forms';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { AuthenticationRoutingModule } from './authentication-routing.module';



@NgModule({
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthenticationModule { }
