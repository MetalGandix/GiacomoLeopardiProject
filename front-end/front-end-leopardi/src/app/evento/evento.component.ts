import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../class/evento';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  selectedFile: File;
  http: any;
  admin: boolean = false
  evento: Evento
  showMsg: boolean = false
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(private service: EventoService, private router: Router, private httpClient: HttpClient) {
    this.evento = new Evento()
  }

  ngOnInit() {
    this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
  }

  onSubmit() {
    this.service.saveEvents(this.evento).subscribe()
    console.log("Nuovo evento", this.evento)
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
    )
    this.showMsg = true
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

}
