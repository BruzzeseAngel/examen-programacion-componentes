import { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import FileUpload from "./FileUpload";

import { auth } from "../firebase/firebaseConfig";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usuario, setUsuario] = useState(null);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUsuario(user);
        });

        return () => unsubscribe();
    }, []);

    const registrar = async () => {
        try {
            const resultado = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            setUsuario(resultado.user);
            setMensaje("Usuario registrado correctamente");
        } catch (error) {
            setMensaje("Error: " + error.message);
        }
    };

    const iniciarSesion = async () => {
        try {
            const resultado = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            setUsuario(resultado.user);
            setMensaje("Sesión iniciada correctamente");
        } catch (error) {
            setMensaje("Error: " + error.message);
        }
    };

    const cerrarSesion = async () => {
        try {
            await signOut(auth);

            setUsuario(null);
            setMensaje("Sesión cerrada");
        } catch (error) {
            setMensaje("Error: " + error.message);
        }
    };

    return (
        <div className="mt-5">
            <h2>Autenticación</h2>

            {!usuario ? (
                <div>
                    <div className="mb-3">
                        <label className="form-label">
                            Correo
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />
                    </div>

                    <button
                        className="btn btn-primary me-2"
                        onClick={registrar}
                    >
                        Registrarse
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={iniciarSesion}
                    >
                        Iniciar sesión
                    </button>
                </div>
            ) : (
                <div>
                    <div className="alert alert-success">
                        <p>
                            Usuario autenticado:
                            {" "}
                            <strong>{usuario.email}</strong>
                        </p>

                        <button
                            className="btn btn-danger"
                            onClick={cerrarSesion}
                        >
                            Cerrar sesión
                        </button>
                    </div>

                    <FileUpload />
                </div>
            )}

            {mensaje && (
                <div className="mt-3 alert alert-info">
                    {mensaje}
                </div>
            )}
        </div>
    );
}

export default Auth;