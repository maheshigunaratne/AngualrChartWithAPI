import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service"
import { id } from "@swimlane/ngx-charts/release/utils";
import { element } from "protractor";
import { Router, RouterModule, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UserList: any[] = [];
  done: boolean = false;
  view: any[] = [500, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'name';
  showYAxisLabel = true;
  yAxisLabel = 'age';

  colorScheme = {
    domain: ['#444b8f', '#1288a4', '#02cc9c', '#aadb6a']
  };
  constructor(public users: UsersService) {

  }
  displayAllUsers(): void {

    this.users.getUsers().subscribe(users => {
      users.forEach(element => {
        this.UserList.push({ "name": element.name, "value": element.age });  // can take only x y values
      });
      this.done = true;
      console.log(this.UserList);
    })

  }
  ngOnInit() {

    this.displayAllUsers();
  }

}
