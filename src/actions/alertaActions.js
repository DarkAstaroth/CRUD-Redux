import { MOSTRAR_ALERTA } from '../types';

// muestra alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch(crearAlerta(alerta));
    }
}
const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload : alerta
})