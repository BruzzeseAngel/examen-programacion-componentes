import React, { Component } from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productos: [
                {
                    id: 1,
                    nombre: "Notebook",
                    precio: 599990
                },
                {
                    id: 2,
                    nombre: "Mouse",
                    precio: 15990
                },
                {
                    id: 3,
                    nombre: "Teclado",
                    precio: 24990
                }
            ],

            carrito: []
        };
    }

    agregarAlCarrito = (producto) => {
        const productoExistente = this.state.carrito.find(
            (item) => item.id === producto.id
        );

        if (productoExistente) {
            this.setState({
                carrito: this.state.carrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            });
        } else {
            this.setState({
                carrito: [
                    ...this.state.carrito,
                    {
                        ...producto,
                        cantidad: 1
                    }
                ]
            });
        }
    };

    render() {
        return (
            <div>
                <h2>Productos</h2>

                {this.state.productos.map((producto) => (
                    <ProductItem
                        key={producto.id}
                        producto={producto}
                        agregarAlCarrito={this.agregarAlCarrito}
                    />
                ))}

                <Cart carrito={this.state.carrito} />

            </div>
        );
    }
}

export default ProductList;