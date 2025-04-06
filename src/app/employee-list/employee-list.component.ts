import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    const GET_EMPLOYEES = gql`
      query {
        employees {
          id
          name
          position
        }
      }
    `;

    this.apollo
      .watchQuery({
        query: GET_EMPLOYEES,
      })
      .valueChanges.subscribe(({ data }: any) => {
        this.employees = data.employees;
      });
  }
}
