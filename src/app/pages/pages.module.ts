import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortSolutionComponent } from './port-solution/port-solution.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AutoCollectionComponent } from './port-solution/auto-collection/auto-collection.component';
import { LogisticCardComponent } from './port-solution/logistic-card/logistic-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PortSolutionComponent,
    AutoCollectionComponent,
    LogisticCardComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports:[LoginComponent, HomeComponent]
})
export class PagesModule { }
