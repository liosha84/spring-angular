import {Component, computed, model, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import {RolesService} from "src/app/services/roles.service";
import { Role } from 'src/app/models/role';
import {User} from "../../models/user.model";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {AsyncPipe} from "@angular/common";
import {FormControl} from "@angular/forms";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";



@Component({
    selector: 'app-board-admin',
    templateUrl: './board-admin.component.html',
    styleUrls: ['./board-admin.component.scss'],
    standalone: false,

})
export class BoardAdminComponent implements OnInit {
  private gridApi: any;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  rowData?: User[];
  allRoles: any;

  readonly currentRole = model('');

  protected myControl = new FormControl('');
  protected ac = new FormControl('');


  constructor(private userService: UserService, private roleService: RolesService ) {
                this.getAllRoles();
              }

  ngOnInit(): void {

    //this.myControl.valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value || '')),
    //);

    this.userService.getAdminBoard().subscribe(
      (data : any) => {
        this.rowData = data;
      },
      (err : any)=> {
        this.rowData = JSON.parse(err.error).message;
      }

    );
  }

  filteredRoles(roles : Role[]):any {
    return  this.allRoles.filter(
      (r:Role) => !roles.some((item) => item.id === r.id),
    );

  }

 // private _filter(value: string): string[] {
 //   const filterValue = value.toLowerCase();
   // this.ac.
   // return this.options.filter(option => option.toLowerCase().includes(filterValue));
  //}

  getAllRoles():any{
    this.roleService.getAllRoles().subscribe(
      (data : any) => {
        this.allRoles = data;
      },
      (err : any)=> {
        this.allRoles = JSON.parse(err.error).message;
      }
    );
  }

  remove(role: string): void {
   // this.fruits.update(fruits => {
   //   const index = fruits.indexOf(fruit);
    //  if (index < 0) {
   //     return fruits;
   //   }

   //   fruits.splice(index, 1);
   //   this.announcer.announce(`Removed ${fruit}`);
   //   return [...fruits];

    }



  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
     // this.fruits.update(fruits => [...fruits, value]);
    }

    // Clear the input value
    this.currentRole.set('');
  }

  selected(roles : Role[], event: MatAutocompleteSelectedEvent): void {

    roles.push(event.option.value);
    this.currentRole.set('');
    event.option.deselect();
  }


  change($event: Event, roles: Role[]) {

  roles.filter(
      (r:Role) => !roles.some((item) => item.name?.toLowerCase() === r.id),
    )
  }
}
