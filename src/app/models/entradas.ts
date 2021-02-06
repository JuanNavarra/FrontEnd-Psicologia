import { SafeHtml } from "@angular/platform-browser";
import { KeyWords } from "./keyWords";

export class Entradas {
    slug: string;
    titulo: string;
    subTitulo: string;
    descripcion: SafeHtml;
    cita: string;
    autorCita: string;
    fechaCreacion: Date;
    creador: string;
    categoria: string;
    imagenCreador: string;
    imagenPost: string;
    keyWords: KeyWords[];
    idBlog: number;
}