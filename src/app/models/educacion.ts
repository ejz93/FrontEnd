export class Educacion {
    id?: number;
    nombreEdu: string;
    descEdu: string;
    imgEdu: string;

    constructor(nombreEdu: string, descEdu: string, imgEdu: string) {
        this.nombreEdu = nombreEdu;
        this.descEdu = descEdu;
        this.imgEdu = imgEdu;
    }
}