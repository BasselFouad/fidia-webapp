import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/pages/products/products.component'
import { ConferencesComponent } from '../app/pages/conferences/conferences.component'
import { HomeComponent } from '../app/pages/home/home.component'
import { AboutUsComponent } from '../app/pages/about-us/about-us.component'
import { ConferenceComponent } from '../app/pages/conferences/conference/conference.component'
import { QuestionsComponent } from '../app/pages/conferences/questions/questions.component'
import { ThankYouComponent } from '../app/pages/conferences/thank-you/thank-you.component'
import { LoginComponent } from './Pages/login/login.component';
import {SignupComponent} from'./Pages/signup/signup.component'
import {SignupDataComponent} from'./Pages/signup/signup-data/signup-data.component';
import { JointPageComponent } from './components/joint-page/joint-page.component';
import { ManualsComponent } from './components/joint-page/manuals/manuals.component';
import { VideosComponent } from './components/joint-page/videos/videos.component';
import { EvidencesComponent } from './components/joint-page/evidences/evidences.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: "products", component: ProductsComponent, canActivate: [AuthGuardService] },
  { path: "conferences", component: ConferencesComponent, canActivate: [AuthGuardService] },
  { path: "conferences/:conferenceId", component: ConferenceComponent, canActivate: [AuthGuardService]},
  { path: "conferences/:conferenceId/questions", component: QuestionsComponent, canActivate: [AuthGuardService]},
  { path: "conferences/:conferenceId/questions/thank-you", component: ThankYouComponent, canActivate: [AuthGuardService]},
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
  { path: "aboutus", component: AboutUsComponent, canActivate: [AuthGuardService] },
  {path: "joint/manuals", component: ManualsComponent, canActivate: [AuthGuardService]},
  {path: "joint/videos", component: VideosComponent, canActivate: [AuthGuardService]},
  {path: "joint/evidences", component: EvidencesComponent, canActivate: [AuthGuardService]},
  {path: "joint/:part", component: JointPageComponent, canActivate: [AuthGuardService]},
  {path: "joint", component: JointPageComponent, canActivate: [AuthGuardService]},
  {path:'signup',component:SignupComponent},
  {path:'signup-data',component:SignupDataComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
