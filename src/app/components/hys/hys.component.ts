import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  private apiServerUrl='https://ejzback.herokuapp.com/';
  ski: Skills[] = []; 
  
  constructor(private skillsService:SkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    };
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe(data => { this.ski = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}