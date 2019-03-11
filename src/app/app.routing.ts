import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
//import { NewuserComponent } from './newuser';
import { AuthGuard } from './_guards';
import { Role } from './_models';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
//	{
//		path: 'newuser',
//		component: Newusercomponent
//	},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);