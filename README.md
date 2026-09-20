Examen Programación de Componentes

Proyecto realizado para el examen final de la asignatura Programación de Componentes - IPLACEX.

La idea del proyecto fue integrar los contenidos vistos durante las unidades, trabajando con React, componentes, props, state, formularios, Firebase, Bootstrap y finalmente transformar la aplicación web en una aplicación Android usando Cordova.

Tecnologías utilizadas

React con Vite

JavaScript

Bootstrap

React Router

Firebase Authentication

Firebase Firestore

Firebase Storage

Simple React Validator

Cordova

Android Studio

Gradle

Funcionalidades realizadas

Ejercicio 1 - Productos y carrito

Se creó una lista de productos usando componentes de React.

Se trabajo con un componente padre que contiene la lista de productos y el estado del carrito, y componentes hijos que reciben la información mediante props.

Los productos se muestran usando map() y desde el componente hijo se puede agregar cada producto al carrito mediante una función callback.

El carrito usa state y setState() para actualizar la información. Si se agrega varias veces el mismo producto se aumenta su cantidad y se calcula su subtotal.

Ejercicio 2 - Formulario y Firebase Firestore

Se creó un formulario con los siguientes campos:

Nombre

Correo

Mensaje

El formulario utiliza SimpleReactValidator para validar que los campos estén correctamente completados.

Los datos enviados desde el formulario son almacenados en Firebase Firestore dentro de la colección contactos.

Ejercicio 3 - Bootstrap, Firebase y Android

Se utilizó Bootstrap para mejorar la interfaz y hacer que los componentes sean responsivos.

También se implementó Firebase Authentication usando correo y contraseña, permitiendo:

Registrar usuarios

Iniciar sesión

Cerrar sesión

Cuando un usuario inicia sesión se habilita la opción para subir archivos a Firebase Storage.

La subida de archivos muestra el progreso y una vez terminado se obtiene la URL del archivo guardado.

Finalmente la aplicación React fue compilada y transformada en una aplicación Android mediante Cordova.

Se configuraron:

Android Studio

Android SDK

Gradle

Java JDK

Cordova

Se generó un APK, se probó en un dispositivo Android real y se verificó que las funciones de Firebase siguieran funcionando correctamente.

Luego el APK fue firmado usando keytool y jarsigner, y finalmente alineado usando zipalign.

Instalación del proyecto

Para disminuir el tamaño del proyecto no se incluye la carpeta node_modules.

Después de descargar o clonar el proyecto se deben instalar nuevamente las dependencias.

npm install

Luego para ejecutar el proyecto:

npm run dev

Para generar la versión de producción:

npm run build

Estructura general

src/
  components/
  firebase/
cordova/
public/

Dentro de src/components se encuentran los componentes principales de la aplicación.

Dentro de src/firebase se encuentra la configuración utilizada para conectar la aplicación con Firebase.

La carpeta cordova contiene la configuración utilizada para generar la aplicación Android.

Navegación

La aplicación cuenta con una página principal que permite ingresar a las distintas partes del examen:

Productos y carrito

Formulario y Firestore

Acceso y almacenamiento

Para la navegación se utilizó React Router con HashRouter, principalmente para mantener compatibilidad al ejecutar la aplicación dentro de Cordova.

APK

La aplicación fue probada directamente en un dispositivo Android mediante depuración USB.

Se generó el APK y posteriormente fue firmado y alineado para dejar una versión final lista para instalar.

Consideraciones

No se incluye la carpeta node_modules debido a su tamaño, ya que todas las dependencias pueden volver a instalarse utilizando:

npm install

Tampoco se deben compartir contraseñas, claves privadas o archivos de firma personales.

Autor

Angel Bruzzese

Estudiante IPLACEX
Asignatura: Programación de Componentes