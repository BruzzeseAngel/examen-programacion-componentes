function ProductItem({ producto, agregarAlCarrito }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3 className="card-title">
                    {producto.nombre}
                </h3>

                <p className="card-text">
                    Precio: ${producto.precio}
                </p>

                <button
                    className="btn btn-primary"
                    onClick={() =>
                        agregarAlCarrito(producto)
                    }
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ProductItem;