import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="text-center">
            <h1 className="mb-3">
                Tienda React
            </h1>

            <p className="lead mb-5">
                Selecciona una opción
            </p>

            <div className="row justify-content-center g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title">
                                Productos
                            </h3>

                            <p className="card-text">
                                Revisa nuestros productos y agrega artículos al carrito.
                            </p>

                            <Link
                                to="/productos"
                                className="btn btn-primary"
                            >
                                Ver productos
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title">
                                Formulario
                            </h3>

                            <p className="card-text">
                                Ingresa información y almacénala en Firebase Firestore.
                            </p>

                            <Link
                                to="/formulario"
                                className="btn btn-success"
                            >
                                Ir al formulario
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title">
                                Acceso de usuario
                            </h3>

                            <p className="card-text">
                                Regístrate, inicia sesión y sube archivos.
                            </p>

                            <Link
                                to="/acceso"
                                className="btn btn-dark"
                            >
                                Ingresar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;