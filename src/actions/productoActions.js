import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types/index';
 
// crea nuevos productos
export function crearNuevoProductoAction(producto) {
    return () => {
        console.log(producto);
    }
}