import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Task} from "../task/task.component";
import {FormControl, Validators} from "@angular/forms";
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-task-list-pop-up',
  templateUrl: './file-pop-up.component.html',
  styleUrls: ['./file-pop-up.component.scss']
})
export class FilePopUpComponent implements OnInit{

  public fileData: File | null = null;
  public taskId: string = '';


  formControl = new FormControl('', [Validators.required])

  constructor(@Inject(MAT_DIALOG_DATA) public data: Task,
              private fileService: FileService) {
  }

  ngOnInit(): void {
  }

  addData(): void {
    console.log(this.fileData)
    if (this.fileData != null) {
      this.fileService.addFile(this.fileData!, this.fileData.name, this.taskId!)
        .subscribe(res => {
          window.location.reload();
        });
    }
  }

  handleFileInput(event: any) {
    this.fileData = event.target.files.item(0);
  }
}
