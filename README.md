# TmdbApp

Esta aplicacion fue construida como una prueba de concepto para mi Objetivo de aprender React Native en mi trabajo en Fluxit. Una vez finalizado el curso [React Native - The Practical Guide [2024]](https://www.udemy.com/course/react-native-the-practical-guide/?couponCode=D_0424), use la api de **The Movie Database** para crear una app que muestre películas con los conocimientos adquiridos en React Native y la herramienta Expo.

La aplicacion consta de las siguientes pantallas:

### HomeScreen
La primera pantalla al entrar en la app te muestra diferentes categorias de películas, una abajo de la otra. Cada categoria tiene:
- Un nombre,
- Una lista con las primeras 8 películas,
- Un botón **More** para ir a la pantalla **MovieListScreen** y ver más películas de dicha categoria.

Mientras están cargando las películas para cada categoria muestra 3 items con un shimmer effect para mostrar un efecto de carga y evitar cambios bruscos en la pantalla cuando se obtiene la respuesta.

Cada categoria se representa con el componente **HorizontalMovieList**.

https://github.com/RNicolasMarin/TmdbApp/assets/69260571/a6d80bdf-0245-4824-97bd-a2890fa8fd57

### MovieListScreen
La siguiente pantalla muestra:
- El nombre de una categoria,
- Una lista con 2 columnas con las películas de dicha categoria.
La consulta para obtener las películas te devuelve grupos de 20 y cuando llegas al final de la lista muestra un spinner cargando mientras solicita el siguiente grupo.

https://github.com/RNicolasMarin/TmdbApp/assets/69260571/9a9cabf8-38f4-4578-ae6f-bdd0be33d1ab

### MovieDetailsScreen
Esta última pantalla muestra distintos detalles de una película, incluyendo:
- Imagen
- Sinopsis
- Géneros
- Estudios productores
- Fecha de lanzamiento
- Países productores
- Idiomas
- Estado
- Link a la página oficial
Cuando entras en la pantalla hace una consulta para obtener los detalles y mientras muestra el mismo shimmer effect en cada seccion de la pantalla.
A esta pantalla se puede acceder desde cualquiera de las 2 pantallas anteriores con solo tocar una pelicula de las listas.

https://github.com/RNicolasMarin/TmdbApp/assets/69260571/5bd79cdd-5321-4157-b969-5fc2f1bcdeb6

https://github.com/RNicolasMarin/TmdbApp/assets/69260571/5c625127-0e69-40f2-8b43-de4f9f3bb20c

## Correr la app
Para ejecutar la app es necesario clonar el proyecto, posicionarse adentro y con la terminal usar el comando:

```
npm start
```

Como la app usa la api de **The Movie Database** es necesario ir a la pagina, loguearse, crear una key de acceso y agregarla en el archivo **WebConstants** en la constante *ACCESS_TOKEN_TOKEN*. Con eso la app ya deberia funcionar y solo hace falta descargar la app **Expo Go** en tu celular y escanear el codigo QR de la terminal para que se abra la aplicacion.
