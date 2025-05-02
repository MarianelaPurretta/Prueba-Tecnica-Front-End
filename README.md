# 📚 Prueba Técnica Frontend React

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)  
![Vite](https://img.shields.io/badge/Bundler-Vite-brightgreen.svg)  
![React](https://img.shields.io/badge/Library-React-blue.svg)  
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green.svg)

---

## 🎯 Descripción

Esta aplicación demuestra tus habilidades en **React** consumiendo la API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Permite:

- **Leer** (Read) los posts existentes y agruparlos por la primera letra del título.  
- **Crear** (Create) nuevos posts con un formulario.  
- **Actualizar** (Update) cualquier post inline.  
- **Eliminar** (Delete) posts.  
- **Mostrar** los primeros 5 comentarios de cada post.  
- **Navegación** con un Navbar que incluye tus redes sociales.  
- **Footer** estático al final de la página.  
- **Diseño responsive** usando CSS Grid y Flexbox.  
- **Estilos** encapsulados con CSS Modules y un esquema de fondo en `index.css`.

---

## 📂 Estructura del Proyecto

```bash
Prueba-Tecnica-Front-End/
├─ .git/                           # Repositorio Git
├─ public/
│  └─ index.html                   # Plantilla HTML
├─ src/
│  ├─ api/
│  │  └─ jsonPlaceholder.js        # Funciones CRUD con Axios
│  ├─ components/
│  │  ├─ Navbar/
│  │  │  ├─ index.jsx
│  │  │  └─ Navbar.module.css
│  │  ├─ Parent/
│  │  │  ├─ index.jsx
│  │  │  └─ Parent.module.css
│  │  ├─ Child/
│  │  │  ├─ index.jsx
│  │  │  └─ Child.module.css
│  │  ├─ Grandchild/
│  │  │  ├─ index.jsx
│  │  │  └─ Grandchild.module.css
│  │  ├─ PostForm/
│  │  │  ├─ index.jsx
│  │  │  └─ PostForm.module.css
│  │  └─ Footer/
│  │     ├─ index.jsx
│  │     └─ Footer.module.css
│  ├─ App.jsx                      # Punto de montaje de la aplicación
│  └─ index.css                    # Estilos globales y fondo
├─ package.json
├─ vite.config.js                  # Configuración de Vite
└─ README.md                       # Documentación del proyecto
```
Tecnologías y Dependencias
Paquete	Versión aproximada	Uso
react	^18.x	Librería principal para UI declarativa
react-dom	^18.x	Renderizado de React en el DOM
vite	^4.x	Bundler y servidor de desarrollo
axios	^1.x	Cliente HTTP para consumir la API JSONPlaceholder
react-icons	^4.x	Biblioteca de iconos para redes sociales

⚙️ Instalación y Primer Arranque
Clonar el repositorio
```
git clone https://github.com/tu-usuario/Prueba-Tecnica-Front-End.git
cd Prueba-Tecnica-Front-End
```
## Instalar dependencias
```
npm install
```
## Iniciar servidor de desarrollo

```
npm run dev
```
Abrir navegador en http://localhost:5173.

## Crear un build de producción

```
npm run build
```
El resultado está en la carpeta dist/.

## Descripción de Componentes
1. Navbar
Archivo: src/components/Navbar/index.jsx

Contiene tu logo o nombre de marca y iconos de redes sociales (GitHub, LinkedIn, Instagram) usando react-icons.

Está fijo en la parte superior con position: fixed; width: 100%;.

2. Parent
Archivo: src/components/Parent/index.jsx

Estado local posts y loading.

useEffect carga y ordena los posts alfabéticamente.

Handlers:

handleCreate: inserta un post nuevo y reordena.

handleDelete: llama a API y filtra el estado.

handleUpdate: actualiza via API y reordena estado.

Agrupa posts por la primera letra de su título y renderiza secciones con encabezado y un grid de tarjetas.

3. Child
Archivo: src/components/Child/index.jsx

Muestra cada post como tarjeta (card).

Inline editing: alterna entre vista y edición de title y body.

Botones Editar, Guardar, Cancelar y Eliminar.

Incluye el componente Grandchild para comentarios.

4. Grandchild
Archivo: src/components/Grandchild/index.jsx

Carga y muestra los primeros 5 comentarios de un post.

Estado local comments y useEffect dependiente de postId.

5. PostForm
Archivo: src/components/PostForm/index.jsx

Formulario controlado para crear nuevos posts.

Campos input y textarea para title y body.

Envía datos a createPost y notifica al padre vía onCreate.

6. Footer
Archivo: src/components/Footer/index.jsx

Pie de página estático que muestra tu autoría y los iconos de redes.

Usa flexbox para centrar su contenido y es responsivo.

🎨 Estilos
CSS Global (src/index.css)
Reset: box-sizing: border-box para todos los elementos.

Fondo: degradados superpuestos via background-image.

Tipografía: Variables CSS en :root.

Botones: estilo base y hover/ foco.

CSS Modules
Cada componente tiene un archivo *.module.css con estilos encapsulados:

Parent.module.css: grids, secciones y colores por grupo (.groupA, .groupB, .groupC).

Child.module.css: estilos de tarjetas, inputs y acciones.

PostForm.module.css: centrar y dar ancho al formulario.

Navbar.module.css y Footer.module.css: layout, posicionamiento y estilos de iconos.


## 🔄 Flujo de Datos (CRUD)
Read:

fetchPosts() en Parent

Ordena, agrupa y renderiza.

Create:

PostForm usa createPost(data)

handleCreate inserta en posts y reordena.

Update:

Child en modo edición inline

updatePost(id, fields)

handleUpdate reemplaza el post en estado y reordena.

Delete:

Botón Eliminar en Child

deletePost(id)

handleDelete filtra el estado.

Comentarios:

Grandchild llama fetchComments(postId)

Muestra lista de comentarios.

## 🛠️ Buenas Prácticas y Extensiones
Manejo de errores: extender los catch en promesas y mostrar mensajes al usuario.

Loading spinners: reemplazar el texto “Cargando…” con un spinner animado.

Rutas: agregar React Router para vistas separadas (lista, detalle, edición).

Testing: usar Jest + React Testing Library para pruebas unitarias y de integración.

Deploy: subir a Netlify, Vercel o GitHub Pages.

TypeScript: tipar componentes y API para mayor robustez.

## 📜 Licencia
Este proyecto está licenciado bajo la MIT License. Revisa el archivo LICENSE para más detalles.

Autor: Marianela Purretta
Documentacion NOTION: https://www.notion.so/UTEAM-1e5d7fd19c33802abf98eef5d3499f83
Año: 2025
Empresa: UTEAM
