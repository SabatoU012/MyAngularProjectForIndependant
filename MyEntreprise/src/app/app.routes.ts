import { Routes } from '@angular/router';
import { HomepageComponent } from '../Pages/Home/homepage/homepage.component';
import { DevWebAppsComponent } from '../Pages/Home/MyServices/dev-web-apps/dev-web-apps.component';
import { ReparationsComponent } from '../Pages/Home/MyServices/reparations/reparations.component';
import { ProgrammationComponent } from '../Pages/Home/MyServices/programmation/programmation.component';
import { Impression3DComponent } from '../Pages/Home/MyServices/impression3-d/impression3-d.component';
import { AboutMeComponent } from '../Pages/Home/about-me/about-me.component';
import { MyPassionsComponent } from '../Pages/Home/my-passions/my-passions.component';
import { ContactMeComponent } from '../Pages/contact-me/contact-me.component';
import { MyskillsComponent } from '../Pages/Home/myskills/myskills.component';

export const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path : "about", component : AboutMeComponent},
    {path : "passions", component : MyPassionsComponent},
    {path: "skills", component : MyskillsComponent},
    {path : "contact", component : ContactMeComponent},
       
    {path: "devWebApps", component : DevWebAppsComponent},
    {path: "reparationElectro", component : ReparationsComponent},
    {path: "programmation", component : ProgrammationComponent},
    {path: "impression3D", component : Impression3DComponent},
    
    
];
