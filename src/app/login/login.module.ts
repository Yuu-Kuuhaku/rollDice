import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSpinner } from '@angular/material/progress-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
    imports:      [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule
     ],
    declarations: [
      LoginComponent,
    ],
    exports: [
      LoginComponent,
    ],

})
export class LoginModule{ }

