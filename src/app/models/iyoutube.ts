import { KeyWords } from "./keyWords";

export interface IYoutube {
    slug: string;
    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
    creador: string;
    categoria: string;
    imagenCreador: string;
    keyWords: KeyWords[];
    idBlog: number;
    idVideo: string;
}
