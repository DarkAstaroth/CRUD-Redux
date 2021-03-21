import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types/index';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// crea nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            // insertar en la APi
            await clienteAxios.post('/productos', producto);

            // Si todo sale bien, actualiza el state
            dispatch(agregarProductoExito(producto));

            // alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            );

        } catch (error) {

            // si hay un error cambiar el state
            dispatch(agregarProductoError(true));

            // alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            });
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});