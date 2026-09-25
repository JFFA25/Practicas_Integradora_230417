# Práctica 03 – Business Model Canvas de Spotify

Business Model Canvas interactivo de **Spotify**, generado con **opencode** y **Archify**. Cada bloque es clicable y abre un modal con su información detallada.

**[Ver el diagrama en GitHub Pages](https://jffa25.github.io/Practicas_Integradora_230417/Practica03/index.html)**

![Vista previa del Modelo](/images/ModeloCanvas_Spotify_2.0.png)

## App elegida <p align="center">
  <img src="https://cdn.simpleicons.org/spotify/1DB954" alt="Spotify" width="80" height="80">
</p>

Spotify: app multiplataforma (Android, iOS, web, escritorio, smart TV, consolas y autos) que uso a diario y con un modelo de negocio freemium + publicidad fácil de analizar.

## Evolución de los prompts

| Versión | Qué pidió | Qué corrigió después |
|---|---|---|
| v1 | Los 9 bloques del canvas con contenido específico de Spotify | Faltaba interacción |
| v2 | Bloques expandibles al clic, accesibles, responsive, datos en `data.js` | Estilos básicos, emojis y espacios vacíos |
| v3 | Paleta oscura de Spotify, íconos SVG en lugar de emojis | La expansión descuadraba el layout |
| v4 | Layout fijo del canvas clásico y detalle en modal (Esc, clic fuera, botón X) | Versión final |
| v5 | La propia tarjeta se expande a pantalla completa (relativa a la pantalla del usuario) en lugar de modal, y lista apilada en móvil | Versión final |

Prompts completos en [`prompts/`](./prompts).

<details>
<summary>Prompt v1</summary>

```
Usa Archify para generar un Business Model Canvas de Spotify, una aplicación multiplataforma (Android, iOS, web, escritorio, smart TV).

Requisitos:
- Incluir los 9 bloques del canvas: Segmentos de clientes, Propuesta de valor, Canales, Relación con clientes, Fuentes de ingresos, Recursos clave, Actividades clave, Socios clave y Estructura de costos.
- Cada bloque debe tener 3 a 5 puntos concretos y relacionados con Spotify.
- Presentarlo como un boceto visual con el layout clásico del canvas.

Salida: una página HTML/CSS/JS en un solo proyecto, lista para subir a un repositorio.
```
</details>

<details>
<summary>Prompt v2</summary>

```
Usa Archify para generar un Business Model Canvas de Spotify (app multiplataforma).

Estructura:
- 9 bloques en el layout clásico del Business Model Canvas (grid CSS).
- Cada bloque muestra solo su título e ícono en estado cerrado.

Interacción (obligatoria):
- Al hacer clic en un bloque, este se expande (con animación suave) y muestra su información detallada: descripción y 3 a 5 puntos específicos de Spotify.
- Al hacer clic de nuevo, o en un botón de cerrar, se contrae.
- Solo un bloque expandido a la vez.
- Accesible con teclado (Enter/Espacio) y con atributos aria-expanded.

Diseño:
- Responsive (móvil y escritorio).
- Un color distinto por bloque, tipografía legible.

Código:
- Archivos separados: index.html, styles.css, script.js.
- Los datos de cada bloque en un archivo data.js o un objeto JSON, no escritos a mano dentro del HTML.
- Comentarios breves y nombres de variables claros.
```
</details>

## Revisión del resultado

- 9 bloques en posición clásica del canvas: sí
- Contenido específico de Spotify: sí
- Se ve bien en celular y escritorio: sí
- Código ordenado en archivos separados: sí

## Descripción del modelo

En el centro está la **propuesta de valor**: acceso inmediato a música, podcasts y audiolibros, descubrimiento personalizado con algoritmos, experiencia multiplataforma, plan gratuito con anuncios frente a Premium, escucha offline y herramientas para creadores. Se dirige a **segmentos** como oyentes gratuitos, Premium, estudiantes, familias, anunciantes y artistas, y llega por **canales** como apps, web, smart TV, consolas y autos.

El canvas se agrupa en tres zonas:

- **Cliente y valor**: segmentos, propuesta de valor, canales y relación con clientes.
- **Motor de ingresos**: suscripciones y publicidad frente a regalías, cloud, marketing y personal.
- **Motor operativo**: marca, plataforma, datos, algoritmos, licencias y socios (sellos, podcasters, cloud y pagos).

## Cómo ejecutarlo

Abre el [enlace de GitHub Pages](https://jffa25.github.io/Practicas_Integradora_230417/Practica03/spotify-bmc.html), o en local abre `Practica03/spotify-bmc.html` con Live Server.

## Autor

JFFA25
