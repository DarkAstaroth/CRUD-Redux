import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editarProducto from '../actions/productoActions';
const EditarProducto = () => {

    // producto a editar
    const producto = useSelector(state => state.productos.productoeditar);
    if (!producto) return null;
    const { nombre, precio, id } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();
        
        editarProducto();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>

                        <form
                            onSubmit={submitEditarProducto()}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary fron-weight-bold text-uppercase d-block w-100"
                            >
                                Editar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;