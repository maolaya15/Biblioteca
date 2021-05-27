/**
 * Interface del libro
 */
export interface Book{
    id?: string;
    titulo: string;
    autor: string;
    descripcion: string;
    edicion: string;
    isbn: number;
    imagen: string;
    resumen: string;
    serie: string;
    tema: string;    
}