import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';
import Producto from '../components/Producto';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // consultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
    }, []);

    // Obtener el state
    const productos = useSelector(state => state.productos.productos);

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Productos;