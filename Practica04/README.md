# Práctica 04 – Business Model Canvas de SICPES

Business Model Canvas interactivo de **SICPES** (Sistema Integral de Control de Pensión de Estudiantes), generado con **opencode** y **Archify**. Cada bloque es clicable y abre un panel con información detallada sobre la operación del sistema.

**[Ver el canvas en GitHub Pages](https://jffa25.github.io/Practicas_Integradora_230417/Practica04/index.html)**

![Vista previa del Modelo](/images/sicpes_canvas.png)

## SICPES <p align="center">
  <img src="/images/SICPES_Producto.png" alt="SICPES" width="80" height="80">
</p>

SICPES es un sistema de gestión para albergues o pensiones estudiantiles, pensado para controlar reservas, pagos, adeudos, accesos y reportes operativos de forma centralizada. El modelo de negocio se apoya en la operación propia del albergue y en la digitalización de procesos antes manuales.

## Evolución de los prompts

| Versión | Qué pidió | Qué corrigió después |
|---|---|---|
| v1 | Los 9 bloques del canvas para SICPES con contenido concreto del negocio | Faltaban detalles de operación y flujo del sistema |
| v2 | Bloques con interacción, estado expandido y datos en `data.js` | Se mejoró la estructura visual y la usabilidad |
| v3 | Diseño limpio, estilos de card, paleta institucional y responsive | Ajuste de proporciones y layout de bloque |
| v4 | Panel modal/expandible con cierre por clic fuera y teclado | Versión final refinada |
| v5 | Exclusión de elementos innecesarios, claridad en métricas y nombres de secciones | Versión final para despliegue |

<details>
<summary>Prompt v1</summary>

```
Usa Archify para generar un Business Model Canvas del Sistema Integral de Control de Pensión de Estudiantes (SICPES).

Requisitos:
- Incluir los 9 bloques del canvas: Segmentos de clientes, Propuesta de valor, Canales, Relación con clientes, Fuentes de ingresos, Recursos clave, Actividades clave, Socios clave y Estructura de costos.
- Cada bloque debe tener 3 a 5 puntos concretos y relacionados con la operación de un albergue estudiantil.
- Presentarlo como un boceto visual con el layout clásico del canvas.

Salida: una página HTML/CSS/JS lista para subir a un repositorio.
```
</details>

<details>
<summary>Prompt v2</summary>

```
Usa Archify para generar un Business Model Canvas de SICPES.

Estructura:
- 9 bloques en el layout clásico del Business Model Canvas.
- Cada bloque muestra solo su título e ícono en estado cerrado.

Interacción (obligatoria):
- Al hacer clic en un bloque, este se expande y muestra información detallada.
- Al hacer clic de nuevo, o en un botón de cerrar, se contrae.
- Solo un bloque expandido a la vez.
- Accesible con teclado y con atributos aria-expanded.

Diseño:
- Responsive.
- Un color distinto por bloque, tipografía legible.

Código:
- Archivos separados: index.html, styles.css, script.js.
- Los datos de cada bloque en un archivo data.js.
- Comentarios breves y nombres de variables claros.
```
</details>

## Revisión del resultado

- 9 bloques en posición clásica del canvas: sí
- Contenido específico de SICPES: sí
- Se ve bien en celular y escritorio: sí
- Código ordenado en archivos separados: sí
- Rutas de recursos configuradas para funcionar bien en GitHub Pages: sí

## Descripción del modelo

En el centro está la **propuesta de valor**: un sistema centralizado para gestionar reservas, pagos, adeudos, controles de acceso y reportes del albergue. Se dirige a **segmentos** como estudiantes pensionados, administradores y dueños del inmueble, y llega por **canales** como la aplicación web, la API y el correo electrónico.

El canvas se agrupa en tres zonas:

- **Cliente y valor**: segmentos, propuesta de valor, canales y relación con clientes.
- **Motor de ingresos**: renta y hospedaje, junto con la gestión eficiente del servicio.
- **Motor operativo**: infraestructura, desarrollo, soporte, documentación y socios clave del negocio.

## Autor

JFFA25
