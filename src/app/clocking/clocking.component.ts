import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalOrderingComponent } from '../modal-ordering/modal-ordering.component';
import { ModalClockingComponent } from '../modal-clocking/modal-clocking.component';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IngredientService } from '../shared/ingredient.service';
import { FaceAPIService } from '../shared/face-api.service';


@Component({
  selector: 'app-clocking',
  templateUrl: './clocking.component.html',
  styleUrls: ['./clocking.component.scss']
})
export class ClockingComponent implements OnInit {
  testqq: any;
  img2;
  aa: any;
  bb: any;
  gid: any;
  person;
  name;
  faceid;
  dialogRef: MdDialogRef<ModalClockingComponent>;
  constructor(
    public dialog: MdDialog,
    private http: Http,
    private ingredientService: IngredientService,
    private faceAPIService: FaceAPIService,


  ) { }
  ngOnInit() {
    // this.tg();
  }
  openDialog() {
    
    setTimeout(() => {

      this.dialogRef = this.dialog.open(ModalClockingComponent, {
        disableClose: false,
        width: '50%',
        data:  this.name
        
      });
    }, 3000);



  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      let headers = new Headers();

      let options = new RequestOptions({ headers: headers });
      this.http.post(`http://139.59.231.135/posrest/public/api/image`, formData, options)
        .map((res) => { this.aa = JSON.parse(res['_body']); })
        .catch(error => Observable.throw(error))
        .subscribe(
        data => { this.img2 = this.aa.file_name; console.log(this.aa.file_name); this.dt(); },
        error => console.log(error)
        )
    }


  }

  add() {
    let body = { '': '', }
    this.ingredientService.create(body).then((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

  edit() {
    let body = { '': '', }
    this.ingredientService.update(1, body).then((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }
  delete() {
    this.ingredientService.delete(1).then((res) => {
      location.reload();
    }, (error) => {
      console.log(error);
    });
  }
  cp() {
    let body = {
      "name": "QuE99",
      "userData": "User-provided data attached to the person"
    }
    this.faceAPIService.createPerson(body).then((res) => {
      this.testqq = res;
      console.log(res['personId']);
      console.log('123');

    }, (error) => {
      console.log(error);
    });
  }

  id() {
    console.log(this.faceid)
  }
  af() {
    let body = {
      "url": "http://139.59.231.135/posrest/public/images/1510692503.jpg"
    }
    this.faceAPIService.addFace('87edbc38-bceb-452f-b385-f9df3e00c455', body).then((res) => {
      console.log(res);

    }, (error) => {
      console.log(error);
    });
  }
  dt() {
    let body = {
      "url": "http://139.59.231.135/posrest/public/images/" + this.img2
    }
    this.faceAPIService.detect(body).then((res) => {
      console.log(res[0].faceId);
      this.faceid = res[0].faceId;
      this.idt();
    }, (error) => {
      console.log(error);
    });
  }
  idt() {
    let body = {
      "personGroupId": "group4",
      "faceIds": [
        this.faceid
      ]
    }
    this.faceAPIService.identify(body).then((res) => {
      console.log(res[0].candidates[0].personId);
      
      this.faceid = res[0].candidates[0].personId;
      // setTimeout(() => {
      //   this.gp();
      // }, 3000);
    }, (error) => {
      console.log(error);
    });
  }
  gp() {
    this.faceAPIService.getPerson(this.faceid).then((res) => {
      console.log(res['name']);
      prompt('Hello' +' '+res['name']);
this.name =res['name'];
    }, (error) => {
      console.log(error);
    });
  }
  tg() {
    let headers = new Headers({ 'Ocp-Apim-Subscription-Key': '9fbd5a025b4446cbb8900549e9dd1761' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(`https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/group3/train`, options)
      .map((res) => { this.aa = JSON.parse(res['_body']); })
      .catch(error => Observable.throw(error))
      .subscribe(
      data => { this.img2 = this.aa.file_name; console.log(this.aa.file_name); this.dt(); },
      error => console.log(error)
      )
    // this.faceAPIService.trainGroup().then((res) => {
    //   console.log(res);


    // }, (error) => {
    //   console.log(error);
    // });
  }
}
