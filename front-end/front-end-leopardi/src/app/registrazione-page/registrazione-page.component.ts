import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/user';
import { AuthenticationService } from '../service/authentication.service';
import { RegistrazioneService } from '../service/registrazione.service';

@Component({
  selector: 'app-registrazione-page',
  templateUrl: './registrazione-page.component.html',
  styleUrls: ['./registrazione-page.component.css']
})
export class RegistrazionePageComponent{

  user: User;
  showMsg: boolean = false;
  userExist: boolean = false;
  b1: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticate: AuthenticationService,
    private registrazione: RegistrazioneService) {
    this.user = new User();
  }

  onSubmit() {
    this.registrazione.save(this.user).subscribe(data =>{})
    this.showMsg= true;
  }

  mettiRuolo(){
    this.authenticate.getRole().authority=='ROLE_VISITATORE'
  }

  existUser(){
    if(this.user.username!=''){
      this.registrazione.existUser(this.user.username).subscribe(res=>{
        if(res){
          this.userExist=true;
          alert("Email già presente nel database, inseriscine una diversa.")
          if(this.userExist == true){
            this.b1 = false
          }
        }else{
          this.userExist=false;
          this.b1 = true
        }
      })
     
    }
  }


}
