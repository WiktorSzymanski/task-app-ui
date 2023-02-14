import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {List} from "../task-list/task-list.component";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit{

  files!: File[];
  constructor(private fileService: FileService) {
  }
  ngOnInit(): void {
    this.fileService.getAllFiles().subscribe(res => {
        this.files = <File[]> res;
        console.log(this.files);
      }
    )
  }

  deleteFile(id: string) {
    console.log("Pressed button to delete task with id: " + id)
    this.fileService.deleteTask(id).subscribe(res => {
      window.location.reload();
    });
  }
}

export class File {
  constructor(
    public id: string,
    public filename: string,
    public url: string,
    public taskId?: string
  ) {
  }

}
