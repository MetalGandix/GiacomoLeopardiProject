import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  selectedFile: File;
  http: any;
  url = "https://www.pngkit.com/bigpic/u2q8i1q8r5r5e6r5";

  selectFile(event) {
    if(event.target.file){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.file[0])
      reader.onload = (event: any) => {
        this.url = event.target.result
      }
    }
  }



  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  // send as a binary data
  // onUpload() {
  //   // this.http is the injected HttpClient
  //   this.http.post('my-backend.com/file-upload', this.selectedFile)
  //     .subscribe(...);
  // }

  //send as a FormData
  // onUpload() {
  //   // this.http is the injected HttpClient
  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //   this.http.post('my-backend.com/file-upload', uploadData)
  //     .subscribe(...);
  // }

  //Listen to upload progress
  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('my-backend.com/file-upload', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }

}
