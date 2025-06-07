import {ChangeDetectionStrategy, Component, Inject, inject, signal} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";


import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {DialogData} from "../../app.component";



@Component({
    selector: 'app-dialog',
    imports: [MatButtonModule, MatLabel, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormField, MatInput, FormsModule, MatIcon,  MatSuffix],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  hide = signal(true);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:DialogData) {}

  onNoClick() {
    this.dialogRef.close();
  }


  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}



