import { SafeHtml } from "@angular/platform-browser";
import { KeyWords } from "./keyWords";

export class Recientes{
    slug: string;
    titulo: string;
    tipo: string;
    imagen: string;
    fechaCreacion: string;
    keyWords: KeyWords[];
    categoria: string;
    descripcion: SafeHtml;
}