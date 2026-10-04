# Práctica 06 – Diagrama de Secuencia de Pantallas (Sketches) de Spotify

Diagrama interactivo de **secuencia de pantallas (sketches)** de la aplicación móvil de **Spotify** con **2 roles**: oyente y artista, generado con **Archify**. Cada pantalla es clicable y abre un panel con su propósito, sus elementos de interfaz y la acción que lleva a la siguiente pantalla.

**[Ver el diagrama en GitHub Pages](https://jffa25.github.io/Practicas_Integradora_230417/Practica06/spotify-secuencia-pantallas.html)**

### Diagrama de Secuencia de Pantallas - Spotify 
![Vista previa del diagrama de secuencia de pantallas](/Practica06/spotify-secuencia-pantallas.visual-check.2048x1320.dark.png)


### Nota académica

Este trabajo es un ejercicio académico. Los bocetos son de baja fidelidad y **no son las pantallas oficiales** de Spotify; el logotipo es propio, inspirado en la identidad musical de la marca, y no está afiliado a Spotify. Solo se usó la paleta de colores como referencia visual.

## Spotify <p align="center">
  <img src="/images/Spotify_App_Logo.svg.webp" alt="Logotipo propio inspirado en Spotify" width="80" height="80">
</p>

Spotify es una aplicación de streaming de música y podcasts. Para esta práctica se eligió porque tiene dos recorridos claros dentro del mundo móvil: el **oyente**, que busca, reproduce y guarda contenido, y el **artista**, que consulta la audiencia y gestiona su música. El diagrama muestra cómo avanza cada rol de pantalla en pantalla y cómo las reproducciones del oyente alimentan las estadísticas del artista.

## Evolución de los prompts

| Versión | Qué pidió | Qué corrigió después |
|---|---|---|
| v1 | Diagrama de secuencia de pantallas con 2 roles (oyente y artista), bocetos de baja fidelidad, flechas numeradas, estados alternos e interacción | Faltaba la identidad visual de la aplicación elegida |
| v2 | Aplicar la paleta de colores inspirada en Spotify y crear un logotipo propio, sin cambiar las pantallas | Los botones de rol solo resaltaban el recorrido, sin llevar al carril correspondiente |
| v3 | Navegación al seleccionar un rol: desplazamiento suave hasta su carril, realce breve, foco accesible y respeto de `prefers-reduced-motion` | Versión final |

<details>
<summary>Prompt v1 — Diagrama de secuencia de pantallas</summary>

```
Usa Archify para generar el Diagrama de Secuencia de Pantallas (Sketches) de la aplicación móvil de Spotify, mostrando el recorrido de 2 roles: oyente y artista.

Alcance y fidelidad:
- Representa pantallas típicas y reconocibles de cada rol con bocetos propios de baja fidelidad (wireframes en escala de grises). No uses logotipos, capturas ni fotografías oficiales de Spotify.
- Basa el contenido solo en funciones públicas y generales de la aplicación; no inventes funciones. Marca como "supuesto" cualquier pantalla que no sea segura.
- Indica en una nota que es un ejercicio académico y que los bocetos no son las pantallas oficiales.

Estructura del diagrama:
- Dos carriles horizontales (uno por rol), con el nombre y el ícono de cada rol.
- Cada carril contiene los bocetos de las pantallas dentro de marcos de teléfono, en el orden del recorrido.
- Rol oyente: inicio de sesión → inicio → buscar → detalle de playlist o álbum → reproductor → biblioteca (canciones guardadas).
- Rol artista: inicio de sesión → panel principal → estadísticas de audiencia → música y lanzamientos → perfil de artista.
- Flechas numeradas entre pantallas, con una etiqueta breve de la acción que dispara el cambio (por ejemplo "Toca una canción").
- Pantallas de estados alternos fuera del flujo principal: sin conexión, búsqueda sin resultados y contenido no disponible.
- Una flecha entre carriles que muestre cómo las reproducciones del oyente alimentan las estadísticas del artista.

Interacción:
- Al hacer clic en una pantalla, se abre un panel con su nombre, propósito, elementos de la interfaz y la acción que lleva a la siguiente pantalla.
- Al seleccionar un rol, se resalta su recorrido y se atenúa el otro.
- Botones para alternar tema claro/oscuro y para restablecer la selección.

Diseño y código:
- Una página HTML autocontenida, responsive, con desplazamiento horizontal en pantallas pequeñas.
- Accesible: controles operables con teclado, aria-pressed, foco visible, textos alternativos y soporte para prefers-reduced-motion.
- Cursor tipo enlace en los elementos clicables, sin selección de texto.
- Cada pantalla debe tener elementos distintos entre sí (no repitas el mismo boceto con otro título).
- Verifica que ningún texto se salga de los marcos de las pantallas.

Salida: un archivo HTML listo para subir a GitHub Pages.
```
</details>

<details>
<summary>Prompt v2 — Paleta de colores y logotipo</summary>

```
Conserva exactamente las pantallas, el orden del recorrido, las flechas, los textos y la interacción actual del diagrama. Ajusta únicamente el estilo visual:

Paleta de colores (inspirada en Spotify):
- Verde de acento #1DB954 para botones principales, flechas activas, rol seleccionado y elementos destacados.
- Negro #191414 y gris muy oscuro #121212 para el fondo del diagrama y los marcos de teléfono.
- Grises #282828 y #535353 para tarjetas y bloques, y #B3B3B3 para textos secundarios.
- Blanco #FFFFFF para textos principales.
- Usa el verde con moderación, solo como acento, y verifica que el contraste de los textos sea de al menos 4.5:1.
- Tema oscuro por defecto, con el botón para alternar al tema claro (adapta la paleta clara con los mismos acentos verdes).

Logotipo:
- Crea un logotipo propio en SVG inline para el encabezado y el favicon, inspirado en la identidad musical de Spotify pero no idéntico: un círculo verde con un símbolo de sonido original (por ejemplo barras de ecualizador o ondas distintas a las de la marca).
- No copies ni trates de reproducir el logotipo oficial, ni uses su tipografía de marca. Evita incluir el nombre "Spotify" dentro del logotipo.
- Mantén el texto del título del diagrama junto al logotipo y agrega una nota breve: "Ejercicio académico, no afiliado a Spotify".

Verificaciones:
- Comprueba que ningún texto se salga de los marcos ni de las tarjetas después del cambio de colores.
- Mantén el cursor tipo enlace, el foco visible, la accesibilidad y prefers-reduced-motion.

Salida: el mismo archivo HTML actualizado.
```
</details>

<details>
<summary>Prompt v3 — Navegación al seleccionar un rol</summary>

```
Conserva exactamente el diseño, los colores, las pantallas, las flechas y la interacción actual. Agrega únicamente navegación al seleccionar un rol:

- Al hacer clic en el botón "Oyente" o "Artista", además de resaltar su recorrido, desplázate suavemente hasta el carril de ese rol para que sus pantallas queden visibles.
- Si el carril ya está visible en pantalla, no hagas scroll innecesario.
- Deja un margen superior para que el título del carril no quede pegado al borde ni tapado por ningún encabezado fijo.
- Si el diagrama se desplaza horizontalmente en pantallas pequeñas, lleva también el scroll horizontal al inicio del recorrido del rol (la primera pantalla).
- Aplica un destello o realce breve (por ejemplo, un contorno verde que se desvanece en 1 segundo) en el carril al llegar, para que el usuario vea a dónde fue.
- Mueve el foco al encabezado del carril, con tabindex="-1", para que quien usa teclado o lector de pantalla llegue al mismo lugar, y anuncia el cambio con una región aria-live (por ejemplo, "Mostrando el recorrido del artista").
- Respeta prefers-reduced-motion: si está activo, desplázate sin animación y sin destello.
- Si se vuelve a hacer clic en el mismo rol, repite el desplazamiento y no quites el resaltado.
- El botón "Restablecer selección" debe quitar el resaltado sin mover la vista.
- No uses librerías externas; usa scrollIntoView con behavior "smooth" o equivalente.

Verificaciones:
- Pruébalo con el diagrama en escritorio y en móvil, y con navegación por teclado.
- Comprueba que ningún texto se salga de los marcos y que el cursor siga siendo tipo enlace.

Salida: el mismo archivo HTML actualizado.
```
</details>

## Revisión del resultado

- 2 roles con su recorrido de pantallas (oyente y artista): sí
- Bocetos de baja fidelidad con flechas numeradas y estados alternos: sí
- Paleta de colores inspirada en Spotify y logotipo propio: sí
- Interacción por pantalla (panel de detalle, resaltado por rol, tema claro/oscuro): sí
- Los botones de rol llevan al carril correspondiente: por confirmar
- Se ve bien en celular y escritorio: por confirmar
- Rutas configuradas para funcionar bien en GitHub Pages: por confirmar al publicar

## Descripción del diagrama

El diagrama organiza las pantallas en dos carriles, uno por rol, dentro de marcos de teléfono:

- **Oyente**: inicio de sesión, inicio, buscar, detalle de playlist o álbum, reproductor y biblioteca con las canciones guardadas.
- **Artista**: inicio de sesión, panel principal, estadísticas de audiencia, música y lanzamientos, y perfil de artista.

Las flechas numeradas indican la acción que lleva de una pantalla a la siguiente. Además se incluyen estados alternos fuera del flujo principal (sin conexión, búsqueda sin resultados y contenido no disponible) y una flecha entre carriles que muestra cómo las reproducciones del oyente alimentan las estadísticas del artista. Lo que no es seguro que exista en la aplicación real se marca como supuesto.

## Autor

- **Jose Francisco Flores Amador** /[@JFFA25](https://github.com/JFFA25)