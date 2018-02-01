import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StudentsComponent } from './components/students/students.component';

import { ProfileComponent } from './components/profile/profile.component';
import { DbService } from './service/dbServics';



const routes: Routes = [
  //{path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomepageComponent },
  {path:'students', component: StudentsComponent},
  {path:'students/profile/:id', component: ProfileComponent},
  {path:'**', redirectTo:''}
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
