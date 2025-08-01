import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getPublicContent().subscribe(
    //   (data : any) => {
    //     this.content = data;
    //   },
    //   (err : any) => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }
}