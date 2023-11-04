import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private dialogRef: MatDialogRef<LoginComponent>) {}

  hide() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
//   show(component) {
//     this.modalRef = this.modalService.show(component, {
//       class: 'modal-lg',
//     });
//   }
}
