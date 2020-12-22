import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { ParentComponent } from './parent/parent.component';
import { DirectivesComponent } from './directives/directives.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'directives', component: DirectivesComponent},
  { path: 'info', component: InfoComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
