import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroupName, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-port-solution',
  templateUrl: './port-solution.component.html',
  styleUrls: ['./port-solution.component.less'],
  
})
export class PortSolutionComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  fromPortSolution = 'from port solution parent'
  items: MenuItem[] = []
  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', command: () => this.router.navigate(["./autoCollection"], { relativeTo: this.route }) },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar', command: () => this.router.navigate(["./logisticCard"], { relativeTo: this.route }) },
    ]
  }
}
