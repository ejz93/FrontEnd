import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
    selector: 'app-new-experiencia',
    templateUrl: './new-experiencia.component.html',
    styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
    nombreExp: string = '';
    descExp: string = '';
    imgExp: string = '';

    constructor(private experienciaService: ExperienciaService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const expe = new Experiencia(this.nombreExp, this.descExp, this.imgExp);
        this.experienciaService.save(expe).subscribe(data => {
            alert("Experiencia añadida");
            this.router.navigate(['']);
        }, err => {
            alert("Falló");
            this.router.navigate(['']);
        }
        )
    }
}