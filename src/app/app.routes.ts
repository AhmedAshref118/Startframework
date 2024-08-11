import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'START FREMWORK',component:HomeComponent},
    {path:'ABOUT',component:AboutComponent},
    {path:'PORTFOLIO',component:PortfolioComponent},
    {path:'CONTACT',component:ContactComponent},
    {path:'**',component:NotfoundComponent},
    
];
