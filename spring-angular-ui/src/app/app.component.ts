import {Component, inject, OnInit} from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./components/dialog/dialog.component";
import {AuthService} from "./services/auth.service";
import {Subscription} from "rxjs";
import {EventBusService} from "./_shared/event-bus.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  //private  authService = new AuthService(provideHttpClient())
  public dialogData : DialogData = {password: "", username: ""};

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;
  private errorMessage: any;
  private isLoginFailed: boolean = false;

  constructor(
    private storageService: TokenStorageService,
    private authService: AuthService,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = true;//this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {

    let dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {username: this.dialogData.username, password: this.dialogData.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result== null){
        return;
      }
      this.dialogData = result;

      this.authService.login(this.dialogData.username, this.dialogData.password).subscribe(
        data => {
          this.storageService.saveToken(data.accessToken);
          this.storageService.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          let user = this.storageService.getUser();
          this.roles = user.roles;
          //this.username = user.username;
          this.reloadPage();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    });

  }
  reloadPage(): void {
    window.location.reload();
  }

}
export interface DialogData {
  username: string;
  password: string;
}

