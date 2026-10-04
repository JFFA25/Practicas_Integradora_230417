# Práctica 05 – Diagrama de Roles de Usuario de SICPES

Diagrama interactivo de **Roles de Usuario** de **SICPES** (Sistema Integral de Control de Pensión de Estudiantes), basado en la historia de usuario **HU-SIC-05: Evaluación del servicio recibido por el cliente**. Cada rol es clicable: resalta sus interacciones, marca su columna en la matriz de permisos y abre un panel con sus responsabilidades.

**[Ver el diagrama de roles en GitHub Pages](https://jffa25.github.io/Practicas_Integradora_230417/Practica05/diagrama-roles-usuario-sicpes.html)**


### Diagrama de Casos de Uso - SICPES Version Final
![Vista previa del diagrama de casos de uso](/Practica05/sicpes_roles.png)

### Documentación de la historia de usuario

Consulta la historia completa, los criterios de aceptación, las reglas de negocio y los supuestos por validar en la [documentación de la historia de usuario](./HU-Evaluacion-Servicio.md).

## SICPES (Sistema Integral de Control de Pension de Estudiantes) <p align="center">
  <img src="/images/SICPES_Producto.png" alt="SICPES" width="80" height="80">
</p>

SICPES es un sistema de gestión para albergues o pensiones estudiantiles, pensado para controlar reservas, pagos, adeudos, accesos y reportes operativos de forma centralizada. La historia HU-SIC-05 propone una capacidad nueva dentro de la aplicación móvil: que el estudiante alojado califique el servicio recibido y la administración use esa información para mejorar.

## Evolución de los prompts

| Versión | Qué pidió | Qué corrigió después |
|---|---|---|
| v1 | Diagrama de casos de uso de la historia de evaluación del servicio | Se pidió mejorarlo |
| v2 | Mejorar el diagrama existente según el proyecto SICPES | Casos agrupados en uno principal con «include» y «extend», leyenda y estilo discontinuo para lo propuesto |
| v3 | Corregir el cursor al pasar el mouse y mejorar estilos | El cursor mostraba selección de texto por una clase CSS que no se aplicaba; se confirmó que era un diagrama de casos de uso y no de roles |
| v4 | Crear el Diagrama de Roles de Usuario, ya que la actividad solo lo indica así | Tres roles (estudiante, sistema, administración) y matriz de permisos |
| v5 | Llevar al diagrama de roles las animaciones del diagrama anterior | Entrada escalonada, resaltado por rol, diálogo de detalle y tema claro/oscuro |

<details>
<summary>Prompt v1</summary>

```
Genera un diagrama UML de casos de uso en HTML para la historia de usuario HU-SIC-05 "Evaluación del servicio recibido por el cliente" de SICPES (documento HU-Evaluacion-Servicio.md).

Requisitos:
- Actores fuera del límite del sistema: estudiante / residente (principal) y administrador de la pensión (secundario).
- Límite del sistema "Aplicación móvil SICPES" con casos de uso ovalados: consultar criterios, iniciar evaluación, calificar, agregar comentario opcional, revisar, enviar y ver confirmación.
- Funciones administrativas (consultar, filtrar, revisar comentarios, identificar mejoras, resumen) marcadas como propuestas por validar.
- Al hacer clic en un óvalo, mostrar su detalle y criterios de aceptación; al seleccionar un actor, resaltar sus asociaciones.
- No inventes funciones que el documento no confirma.

Salida: un archivo HTML autocontenido, responsive y accesible, con tema claro y oscuro.
```
</details>

<details>
<summary>Prompt v2</summary>

```
Tengo que hacer mi diagrama de Roles de Usuario, se mira bien pero podrías mejorarlo? Es de acuerdo a mi proyecto SICPES.
```
</details>

<details>
<summary>Prompt v3 — Cursor y estilos</summary>

```
Cuando paso el mouse se queda en modo selección de texto pero debería ser como selección de vínculo. Mejora estilos y crees que así está bien? No sé si ese es el diagrama de roles de usuario.
```
</details>

<details>
<summary>Prompt v4 — Diagrama de Roles de Usuario</summary>

```
Es que la actividad solo dice "Diagrama de Roles de Usuario".
```
</details>

<details>
<summary>Prompt v5 — Animaciones</summary>

```
Déjale las animaciones anteriores y creo que con eso se mira épico.
```
</details>

## Revisión del resultado

- Roles tomados de la historia HU-SIC-05 (estudiante alojado, administración y sistema móvil): sí
- Lo no confirmado por la documentación está marcado como propuesta por validar: sí
- Matriz de permisos por rol: sí
- Animaciones, resaltado por rol, diálogo de detalle y tema claro/oscuro: sí
- Se ve bien en celular y escritorio: por confirmar
- Rutas configuradas para funcionar bien en GitHub Pages: por confirmar al publicar

## Descripción del diagrama

El diagrama muestra tres roles dentro del módulo **Evaluación del servicio** de la aplicación móvil de SICPES:

- **Estudiante alojado (actor principal)**: consulta los criterios, califica el servicio de 1 a 5, agrega un comentario opcional, envía la evaluación y ve la confirmación.
- **Sistema móvil / servicio (soporte)**: verifica la elegibilidad, valida los datos, registra una sola evaluación por estancia, evita duplicados en reintentos y protege los datos personales.
- **Administración (actor secundario, propuesta)**: consulta resultados agregados, filtra por periodo o categoría, revisa comentarios con acceso restringido e identifica áreas de mejora.

Una **matriz de permisos** resume qué acción corresponde a cada rol e indica que editar o eliminar una evaluación enviada no se permite en la primera versión. Las funciones de la administración y el historial del estudiante son propuestas pendientes de validar con las personas responsables de SICPES.

## Autor

- **Jose Francisco Flores Amador** /[@JFFA25](https://github.com/JFFA25)
