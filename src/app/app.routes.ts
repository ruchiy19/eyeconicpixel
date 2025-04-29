import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './components/contacts/contacts.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'aboutus',component:AboutusComponent,
        data: {
             title: 'The work we love',
             subtitle: 'Crafting Seamless User Experiences with Elegant Frontend Design',
             headerImg:'/assets/img/aboutImg.png' 
            }
        },

    {path:'portfolio',component:PortfolioComponent,
        data: { 
            title: 'My Portfolio',
            subtitle:'Crafting Seamless User Experiences with Elegant Frontend Design',
            headerImg:'/assets/img/header-portfolio.jpg'
        } 
    },
   
    {
        path: 'contactus', component: ContactsComponent,data: { title: 'ContactUs',subtitle:'Crafting Seamless User Experiences with Elegant Frontend Design',headerImg:'/assets/img/contacts.jpg'  }
    },
    { 
        path: 'shared', 
        loadChildren: () => import('./share/shared/shared.module').then(m => m.SharedModule) 
      },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home
    
];
