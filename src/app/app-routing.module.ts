import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PortSolutionComponent } from './pages/port-solution/port-solution.component';
import { AutoCollectionComponent } from './pages/port-solution/auto-collection/auto-collection.component';
import { LogisticCardComponent } from './pages/port-solution/logistic-card/logistic-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'port', component: PortSolutionComponent, children: 
    [
      {
        path: 'autoCollection', component: AutoCollectionComponent
      }, 
      { 
        path: 'logisticCard', component: LogisticCardComponent 
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
