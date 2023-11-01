import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[LayoutComponent]
})
export class ContainerModule {}
