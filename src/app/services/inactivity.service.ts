import { Component, Inject, Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  inactivityTimerID: any;

  constructor(public dialog: MatDialog) {
    this.resetInactivityTimer();
  }

  resetInactivityTimer(): void {
    if (this.inactivityTimerID) {
      clearTimeout(this.inactivityTimerID);
    }
    this.inactivityTimerID = setTimeout(() => {
      this.openDialog();
    }, 180000);
  }

  redirectToGoogle(): void {
    window.location.href = 'https://www.google.com';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RedirectConfirmDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.redirectToGoogle();
      } else {
        this.resetInactivityTimer();
      }
    });
  }
}

@Component({
  selector: 'app-redirect-confirm-dialog',
  templateUrl: './../components/redirect-confirm-dialog/redirect-confirm-dialog.html',
})
export class RedirectConfirmDialog {
  constructor(
    public dialogRef: MatDialogRef<RedirectConfirmDialog>,
  ) {}

  closeDialogAndRedirect(redirect: Boolean): void {
    this.dialogRef.close(redirect);
  }
}
