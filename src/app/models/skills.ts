export class Skills{
    id?: number;
    nombreSkill: string;
    imgSkill: string;
    porcentaje: number;

    constructor(nombreSkill: string, imgSkill: string, porcentaje: number){
        this.nombreSkill = nombreSkill;
        this.imgSkill = imgSkill;
        this.porcentaje = porcentaje;
    }
}