import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../class/evento';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit{
  selectedFile: File;
  http: any;
  admin: boolean = false
  evento: Evento
  showMsg: boolean = false
  url = "https://www.pngkit.com/bigpic/u2q8i1q8r5r5e6r5";

  constructor(private service: EventoService, private router: Router) {
    this.evento = new Evento()
  }

  ngOnInit(){
    this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
  }

  // Mogia  
  onSubmit(){
    this.service.saveEvents(this.evento).subscribe()
    console.log("Nuovo evento",this.evento)
    this.showMsg = true
  }

  // Petrac
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
