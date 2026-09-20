function Cart({ carrito }) {
    return (
        <div className="mt-4">
            <h2>Carrito</h2>

            {carrito.length === 0 ? (
                <div className="alert alert-secondary">
                    El carrito está vacío
                </div>
            ) : (
                <ul className="list-group">
                    {carrito.map((producto) => (
                        <li
                            key={producto.id}
                            className="list-group-item d-flex justify-content-between"
                        >
                            <span>
                                {producto.cantidad}x {producto.nombre}
                            </span>

                            <span>
                                ${producto.precio * producto.cantidad}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;