import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
const EditarProducto = () => {

    // nuevo state de producto
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    })

    // producto a editar
    const productoEditar = useSelector(state => state.productos.productoeditar);
    // if (!producto) return null;

    useEffect(() => {
        setProducto(productoEditar);
    }, [productoEditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, precio, id } = producto;

    const submitEditarProducto = e => {

        e.preventDefault();

        editarProductoAction();
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
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
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
                                    onChange={onChangeFormulario}
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