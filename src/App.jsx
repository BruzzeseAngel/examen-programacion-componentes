import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import ProductList from "./components/ProductList";
import UserForm from "./components/UserForm";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="container py-4">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4">
        <div className="container-fluid">

          <Link
            className="navbar-brand"
            to="/"
          >
            Tienda React
          </Link>

          <div>
            <Link
              className="btn btn-outline-light me-2"
              to="/productos"
            >
              Productos
            </Link>

            <Link
              className="btn btn-outline-light me-2"
              to="/formulario"
            >
              Formulario
            </Link>

            <Link
              className="btn btn-outline-light"
              to="/acceso"
            >
              Acceso
            </Link>
          </div>

        </div>
      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/productos"
          element={<ProductList />}
        />

        <Route
          path="/formulario"
          element={<UserForm />}
        />

        <Route
          path="/acceso"
          element={<Auth />}
        />

      </Routes>

    </div>
  );
}

export default App;