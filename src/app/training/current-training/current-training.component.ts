import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  progress: any;
  timer: any;
}

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer;
  @Output() stopCurrentTraining = new EventEmitter<void>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.startOrResumeTraining()
  }
  startOrResumeTraining(): void {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }
  onStopTimer() {
    this.stopTimer();
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      width: '350px',
      data: {progress: this.progress, timer: this.timer}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result === true) {

        this.stopCurrentTraining.emit();
      }else {
        this.startOrResumeTraining();
      }
    });
  }

}

@Component({
  selector: 'app-stop-training',
  template: `<h1 mat-dialog-title>Stop current training?</h1>
              <div mat-dialog-content>
                <h1 >You already got {{data.progress}}%</h1>
              </div>
              <div mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">Yes</button>
                <button mat-button [mat-dialog-close]="false" cdkFocusInitial>No</button>
              </div>`,
})
export class StopTrainingComponent {

  constructor(
    public dialogRef: MatDialogRef<StopTrainingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
