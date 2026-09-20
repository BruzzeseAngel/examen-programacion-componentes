import { useState } from "react";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";

import { storage } from "../firebase/firebaseConfig";

function FileUpload() {
    const [archivo, setArchivo] = useState(null);
    const [progreso, setProgreso] = useState(0);
    const [url, setUrl] = useState("");
    const [mensaje, setMensaje] = useState("");

    const subirArchivo = () => {
        if (!archivo) {
            setMensaje("Debes seleccionar un archivo");
            return;
        }

        const archivoRef = ref(
            storage,
            `uploads/${archivo.name}`
        );

        const tareaSubida = uploadBytesResumable(
            archivoRef,
            archivo
        );

        tareaSubida.on(
            "state_changed",

            (snapshot) => {
                const porcentaje =
                    (snapshot.bytesTransferred /
                        snapshot.totalBytes) *
                    100;

                setProgreso(Math.round(porcentaje));
            },

            (error) => {
                console.error(error);
                setMensaje("Error al subir el archivo");
            },

            async () => {
                const downloadURL = await getDownloadURL(
                    tareaSubida.snapshot.ref
                );

                setUrl(downloadURL);
                setMensaje("Archivo subido correctamente");
            }
        );
    };

    return (
        <div className="mt-4">
            <h3>Subir archivo</h3>

            <div className="mb-3">
                <input
                    type="file"
                    className="form-control"
                    onChange={(e) =>
                        setArchivo(e.target.files[0])
                    }
                />
            </div>

            <button
                className="btn btn-primary"
                onClick={subirArchivo}
            >
                Subir archivo
            </button>

            {progreso > 0 && (
                <div className="mt-3">
                    <p>Progreso: {progreso}%</p>

                    <div className="progress">
                        <div
                            className="progress-bar"
                            style={{
                                width: `${progreso}%`
                            }}
                        >
                            {progreso}%
                        </div>
                    </div>
                </div>
            )}

            {mensaje && (
                <div className="alert alert-info mt-3">
                    {mensaje}
                </div>
            )}

            {url && (
                <div className="mt-3">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver archivo subido
                    </a>
                </div>
            )}
        </div>
    );
}

export default FileUpload;