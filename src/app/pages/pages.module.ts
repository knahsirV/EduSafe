import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FireSafetyComponent } from './fire-safety/fire-safety.component';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './news.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCKpzKVPi0W_Ba6YNW9mxFHxqAPseEX9sM'
          })
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        LoginComponent,
        DashboardComponent,
        FireSafetyComponent,
    ],
    providers: [
                NewsService,
    ]
})
export class PagesModule { }
