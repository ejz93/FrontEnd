import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreSkill: string = '';
  imgSkill: string = '';
  porcentaje: any = '';

  constructor(private skillsService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const ski = new Skills(this.nombreSkill, this.imgSkill, this.porcentaje);
    this.skillsService.save(ski).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
