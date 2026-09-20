import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            correo: "",
            mensaje: ""
        };

        this.validator = new SimpleReactValidator({
            messages: {
                required: "El campo :attribute es obligatorio.",
                min: "El campo :attribute debe tener al menos :min caracteres.",
                email: "El campo :attribute debe ser un correo válido."
            }
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        if (this.validator.allValid()) {
            try {
                await addDoc(collection(db, "contactos"), {
                    nombre: this.state.nombre,
                    correo: this.state.correo,
                    mensaje: this.state.mensaje
                });

                alert("Datos guardados correctamente");

                this.setState({
                    nombre: "",
                    correo: "",
                    mensaje: ""
                });

                this.validator.hideMessages();
                this.forceUpdate();
            } catch (error) {
                console.error("Error al guardar:", error);
                alert("Ocurrió un error al guardar los datos");
            }
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    };

    render() {
        return (
            <div>
                <h2 className="mb-4">
                    Formulario de contacto
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Nombre
                        </label>

                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.handleChange}
                        />

                        {this.validator.message(
                            "Nombre",
                            this.state.nombre,
                            "required|min:3"
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Correo
                        </label>

                        <input
                            className="form-control"
                            type="email"
                            name="correo"
                            value={this.state.correo}
                            onChange={this.handleChange}
                        />

                        {this.validator.message(
                            "Correo",
                            this.state.correo,
                            "required|email"
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Mensaje
                        </label>

                        <textarea
                            className="form-control"
                            name="mensaje"
                            value={this.state.mensaje}
                            onChange={this.handleChange}
                        />

                        {this.validator.message(
                            "Mensaje",
                            this.state.mensaje,
                            "required|min:5"
                        )}
                    </div>

                    <button
                        className="btn btn-success"
                        type="submit"
                    >
                        Guardar
                    </button>
                </form>
            </div>
        );
    }
}

export default UserForm;