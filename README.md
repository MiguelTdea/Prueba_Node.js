# Documentación del Proyecto

## peliculas.js

Este módulo maneja las rutas relacionadas con las películas en la aplicación.

- **GET /peliculas**: Recupera una lista de todas las películas disponibles.
- **GET /peliculas/:id**: Recupera los detalles de una película específica por su ID.
- **POST /peliculas**: Crea una nueva película con los datos proporcionados en el cuerpo de la solicitud.
- **PUT /peliculas/:id**: Actualiza la información de una película existente identificada por su ID.
- **DELETE /peliculas/:id**: Elimina una película específica por su ID.

## categorias.js

Este módulo gestiona las rutas relacionadas con las categorías de las películas.

- **GET /categorias**: Obtiene una lista de todas las categorías disponibles.
- **GET /categorias/:id**: Obtiene los detalles de una categoría específica por su ID.
- **POST /categorias**: Crea una nueva categoría con los datos proporcionados en el cuerpo de la solicitud.
- **PUT /categorias/:id**: Actualiza la información de una categoría existente identificada por su ID.
- **DELETE /categorias/:id**: Elimina una categoría específica por su ID.





# Documentación del Proyecto - API de Gestión de Películas 

Esta API permite gestionar un catálogo de películas y categorías, proporcionando rutas para crear, actualizar, eliminar y listar películas y categorías. También incluye validaciones de datos y medidas de seguridad básicas como configuración de CORS.

## Configuración Inicial

1. **Clona el repositorio**:
  
   git clone 
   
   
2. **Instala las dependencias**:
   
   npm install
   

3. **Inicia el servidor**:
  
   npm run dev
  

## Endpoints de la API

### Base URL

Todas las rutas comienzan con: `http://localhost:3000/api`



### Endpoints de Películas - `peliculas.js`

Este módulo maneja las rutas relacionadas con las películas.

#### 1. Obtener la lista completa de películas con paginación

- **Endpoint**: `/peliculas`
- **Método**: `GET`
- **Descripción**: Recupera una lista paginada de todas las películas disponibles.
- **Parámetros de Consulta**:
  - `page`: Número de la página (opcional, por defecto: `1`).
  - `limit`: Cantidad de resultados por página (opcional, por defecto: `3`).
- **Ejemplo de Solicitud**:
  ```
  GET /peliculas?page=1&limit=5
  ```
- **Respuesta de Ejemplo**:
  ```json
  {
    "data": [
      {
        "id": 1,
        "nombre": "Matrix",
        "descripcion": "Película de ciencia ficción sobre una realidad simulada.",
        "puntuacion": 5,
        "duracion": 136,
        "categoria_id": 2,
        "createdAt": "2024-11-05T13:00:00.000Z",
        "updatedAt": "2024-11-05T13:00:00.000Z"
      }
    ],
    "meta": {
      "total": 50,
      "page": 1,
      "totalPages": 5
    }
  }
  ```

#### 2. Obtener los detalles de una película por ID

- **Endpoint**: `/peliculas/:id`
- **Método**: `GET`
- **Descripción**: Recupera los detalles de una película específica por su ID.

#### 3. Crear una nueva película

- **Endpoint**: `/peliculas`
- **Método**: `POST`
- **Descripción**: Crea una nueva película.
- **Validaciones**:
  - `nombre`: Texto requerido.
  - `descripcion`: Texto requerido
  - `puntuacion`: Número entre 1 y 5 requerido.
  - `duracion`: Número positivo requerido.
  - `categoria_id`: Número entero requerido.
- **Ejemplo de Cuerpo de Solicitud**:
  ```json
  {
    "nombre": "Matrix",
    "descripcion": "Película de ciencia ficción sobre una realidad simulada.",
    "puntuacion": 5,
    "duracion": 136,
    "categoria_id": 2
  }
  ```

#### 4. Actualizar una película existente

- **Endpoint**: `/peliculas/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza la información de una película por su ID.
- **Cuerpo de la Solicitud**: Igual al de la creación, con las mismas validaciones.

#### 5. Eliminar una película

- **Endpoint**: `/peliculas/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina una película específica por su ID.

---

### Endpoints de Categorías - `categorias.js`

Este módulo gestiona las rutas relacionadas con las categorías.

#### 1. Obtener la lista completa de categorías

- **Endpoint**: `/categorias`
- **Método**: `GET`
- **Descripción**: Recupera una lista de todas las categorías.

#### 2. Obtener los detalles de una categoría por ID (incluyendo las películas asociadas)

- **Endpoint**: `/categorias/:id`
- **Método**: `GET`
- **Descripción**: Recupera los detalles de una categoría específica por su ID, junto con las películas asociadas.

#### 3. Crear una nueva categoría

- **Endpoint**: `/categorias`
- **Método**: `POST`
- **Descripción**: Crea una nueva categoría.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "nombre": "Acción"
  }
  ```

#### 4. Actualizar una categoría existente

- **Endpoint**: `/categorias/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza la información de una categoría específica por su ID.
- **Cuerpo de la Solicitud**: Igual al de la creación.

#### 5. Eliminar una categoría

- **Endpoint**: `/categorias/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina una categoría específica por su ID.

---

## Seguridad y Validaciones

### Validaciones de Datos

Utilizamos `express-validator` para validar datos en las rutas `POST` y `PUT`:
- Validaciones incluidas para asegurar que los campos obligatorios están presentes y en el formato adecuado.
- Devuelve un mensaje de error específico en caso de validación fallida.

### Seguridad con CORS

- **CORS**: Configurado para restringir el acceso a dominios específicos.
- **Configuración Básica de CORS**:
  ```javascript
  app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));
  ```

## Uso de Buenas Prácticas de Codificación

- **Estructura del Proyecto**: La estructura sigue el patrón MVC (Model-View-Controller) para una mejor organización.
- **Variables de Entorno**: Configuraciones sensibles, como las credenciales de base de datos, están en `.env`.
- **Manejo de Errores**: Cada controlador incluye manejo de errores para responder con mensajes claros en caso de fallo.

  

