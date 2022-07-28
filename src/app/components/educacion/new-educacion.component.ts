import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu: string = '';
  descEdu: string = '';
  imgEdu: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    
    const edu = new Educacion(this.nombreEdu, this.descEdu, this.imgEdu);
    this.educacionService.save(edu).subscribe(data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
    }, err => {
        alert("Falló");
        this.router.navigate(['']);
    }
    )
  }

}
