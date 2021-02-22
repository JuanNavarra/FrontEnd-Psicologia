import { KeyWords } from "./keyWords";

export interface IPodcast {
    slug: string;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    fechacreacion: Date;
    creador: string;
    categoria: string;
    imagenCreador: string;
    keyWords: KeyWords[];
    idBlog: number;
}
