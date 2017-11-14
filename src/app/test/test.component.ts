import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalOrderingComponent } from '../modal-ordering/modal-ordering.component';
import { ImageService } from '../shared/image.service';
import { FaceAPIService } from '../shared/face-api.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  data: any;
  dialogRef: MdDialogRef<ModalOrderingComponent>;

  constructor(
    private faceService: FaceAPIService,
    public dialog: MdDialog,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.faceService.all().then((res) => {
      this.data = res;
    });
  }
  openDialog() {
    this.dialogRef = this.dialog.open(ModalOrderingComponent, {
      disableClose: false,
      width: '50%',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }
test() {
  console.log(this.data.name);
}

upload() {
  let fileBrowser = this.fileInput.nativeElement;
  if (fileBrowser.files && fileBrowser.files[0]) {
    const formData = new FormData();
    formData.append("image", fileBrowser.files[0]);
    this.imageService.upload(formData,'' ,1).then(res => {
      // do stuff w/my uploaded file
    });
  }
}

// upload() {
//   let fileBrowser = this.fileInput.nativeElement;
//   if (fileBrowser.files && fileBrowser.files[0]) {
//     const formData = new FormData();
//     this.imageService.create(formData).then((res) => {
//       console.log(res);
//     }, (error) => {
//       console.log(error);
//     });
//   }
// }

}
