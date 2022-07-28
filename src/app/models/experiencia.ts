export class Experiencia {
    id?: number;
    nombreExp: string;
    descExp: string;
    imgExp: string;

    constructor(nombreExp: string, descExp: string, imgExp: string) {
        this.nombreExp = nombreExp;
        this.descExp = descExp;
        this.imgExp = imgExp;
    }
}