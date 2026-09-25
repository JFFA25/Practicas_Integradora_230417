/* ============================================================
   Datos del Business Model Canvas de SICPES
   Fuente única de contenido para index.html y script.js
   ============================================================ */

(function () {
  'use strict';

  var svg = function (inner) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" ' +
      'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' +
      inner + '</svg>';
  };

  var icons = {
    'link': svg(
      '<path d="M10 13.5a4.5 4.5 0 0 0 6.36 0l2.5-2.5a4.5 4.5 0 0 0-6.36-6.36l-1.2 1.2"/>' +
      '<path d="M14 10.5a4.5 4.5 0 0 0-6.36 0l-2.5 2.5a4.5 4.5 0 0 0 6.36 6.36l1.2-1.2"/>'
    ),
    'check-square': svg(
      '<rect x="4" y="4" width="16" height="16" rx="3"/>' +
      '<path d="m8.5 12 2.5 2.5 4.5-5"/>'
    ),
    'database': svg(
      '<ellipse cx="12" cy="6.5" rx="7" ry="3"/>' +
      '<path d="M5 6.5v11c0 1.66 3.13 3 7 3s7-1.34 7-3v-11"/>' +
      '<path d="M19 12c0 1.66-3.13 3-7 3s-7-1.34-7-3"/>'
    ),
    'star': svg(
      '<path d="m12 4.5 2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 16.5l-4.7 2.45.9-5.23-3.8-3.7 5.25-.76L12 4.5Z"/>'
    ),
    'message-circle': svg(
      '<path d="M20 11.7a7.6 7.6 0 0 1-11 6.76L4.2 19.8l1.34-4.6A7.6 7.6 0 1 1 20 11.7Z"/>' +
      '<path d="M9.4 11.6h.01M12 11.6h.01M14.6 11.6h.01"/>'
    ),
    'wifi': svg(
      '<path d="M3.5 9.3a13 13 0 0 1 17 0"/>' +
      '<path d="M6.6 12.8a8.4 8.4 0 0 1 10.8 0"/>' +
      '<path d="M9.7 16.2a3.9 3.9 0 0 1 4.6 0"/>' +
      '<path d="M12 19.6h.01"/>'
    ),
    'users': svg(
      '<path d="M15.5 19.5v-1.2a3.6 3.6 0 0 0-3.6-3.6H7.6A3.6 3.6 0 0 0 4 18.3v1.2"/>' +
      '<circle cx="9.75" cy="8" r="3.4"/>' +
      '<path d="M20 19.5v-1.2a3.6 3.6 0 0 0-2.7-3.5"/>' +
      '<path d="M15.4 4.7a3.4 3.4 0 0 1 0 6.6"/>'
    ),
    'trending-up': svg(
      '<path d="M3.5 16.5 9 11l3.5 3.5L20 7"/>' +
      '<path d="M15.5 6.8H20v4.5"/>'
    ),
    'credit-card': svg(
      '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/>' +
      '<path d="M3 10h18"/>' +
      '<path d="M6.8 14.4h3"/>'
    ),
    'chevron': svg(
      '<path d="M9 5.5 16 12l-7 6.5"/>'
    )
  };

  var blocks = [
    {
      id: 'partners',
      title: 'Socios clave',
      subtitle: 'Key Partners',
      icon: 'link',
      summary: 'Equipo, correo e institución',
      metric: '3 tipos de socios',
      points: [
        { label: 'Equipo de desarrollo', detail: 'Construye, mantiene y prueba el sistema web de SICPES junto a la institución.' },
        { label: 'Proveedor de correo (SMTP)', detail: 'Entrega los avisos automáticos de reservas, pagos y movimientos de cada pensionado.' },
        { label: 'Institución educativa o de pensión', detail: 'Valida la operación, habilita el acceso al almuerzo y aporta la infraestructura del albergue.' }
      ]
    },
    {
      id: 'activities',
      title: 'Actividades clave',
      subtitle: 'Key Activities',
      icon: 'check-square',
      summary: 'Desarrollo, reservas y control',
      metric: '5 actividades',
      points: [
        { label: 'Desarrollo y mantenimiento', detail: 'Evolución continua de la API, la interfaz web y la base de datos.' },
        { label: 'Cuentas y seguridad', detail: 'Registro, inicio de sesión, cifrado de contraseñas y recuperación de acceso.' },
        { label: 'Control de reservas', detail: 'Registro de entradas y salidas sin duplicar movimientos ni superar el cupo asignado.' },
        { label: 'Reportes y auditoría', detail: 'Historial de pagos y adeudos con información consolidada para reportes en PDF y Excel.' },
        { label: 'Calidad y documentación', detail: 'Pruebas de la API y documentación técnica en Markdown para el mantenimiento.' }
      ]
    },
    {
      id: 'resources',
      title: 'Recursos clave',
      subtitle: 'Key Resources',
      icon: 'database',
      summary: 'MySQL, Express, React, nodemailer',
      metric: '5 recursos',
      points: [
        { label: 'MySQL', detail: 'Almacena estudiantes, administradores, habitaciones, reservas, pagos y adeudos.' },
        { label: 'Node.js y Express', detail: 'API REST que centraliza la lógica de negocio y la autenticación de usuarios.' },
        { label: 'React, TypeScript y TailwindCSS', detail: 'Interfaz web responsiva para computadoras, tablets y equipos de escritorio.' },
        { label: 'Nodemailer', detail: 'Envío de notificaciones y comprobantes por correo electrónico.' },
        { label: 'Documentación Markdown', detail: 'Manuales de instalación, uso y mantenimiento del sistema.' }
      ]
    },
    {
      id: 'value',
      title: 'Propuesta de valor',
      subtitle: 'Value Propositions',
      icon: 'star',
      summary: 'Registro, pagos y avisos',
      metric: '5 beneficios clave',
      points: [
        { label: 'Registro y reserva en línea', detail: 'El pensionado reserva su lugar sin formularios en papel ni desplazamientos innecesarios.' },
        { label: 'Pagos y adeudos automatizados', detail: 'Calcula lo pendiente y guarda el historial de cada transacción realizada.' },
        { label: 'Entrada y salida fechadas', detail: 'Cada movimiento registra fecha y hora exactas para el control interno del albergue.' },
        { label: 'Avisos automáticos', detail: 'Notificaciones por correo sobre reservas, pagos y estado de cuenta.' },
        { label: 'Reportes para la administración', detail: 'Información consolidada de ocupación y pagos, exportable en PDF y Excel.' }
      ]
    },
    {
      id: 'relations',
      title: 'Relación con clientes',
      subtitle: 'Customer Relationships',
      icon: 'message-circle',
      summary: 'Autoservicio y soporte',
      metric: '3 modalidades de atención',
      points: [
        { label: 'Autoservicio del estudiante', detail: 'El pensionado gestiona sus reservas y pagos sin intervención directa.' },
        { label: 'Soporte administrativo', detail: 'El administrador atiende dudas, corrige datos y revisa el estado de las cuentas.' },
        { label: 'Comunicación automatizada', detail: 'Correos que confirman cada acción y reducen la carga de atención manual.' }
      ]
    },
    {
      id: 'channels',
      title: 'Canales',
      subtitle: 'Channels',
      icon: 'wifi',
      summary: 'App web, API REST y correo',
      metric: '3 canales de contacto',
      points: [
        { label: 'Aplicación web', detail: 'Interfaz React accesible desde computadora, tablet y teléfono.' },
        { label: 'API REST', detail: 'Servicios consumibles por terceros y documentados con Swagger u OpenAPI.' },
        { label: 'Correo electrónico', detail: 'Canal de confirmación y notificación de reservas, pagos y movimientos.' }
      ]
    },
    {
      id: 'segments',
      title: 'Segmentos de clientes',
      subtitle: 'Customer Segments',
      icon: 'users',
      summary: 'Estudiantes y administradores',
      metric: '3 grupos de usuario',
      points: [
        { label: 'Estudiantes pensionados', detail: 'Necesitan reservar, pagar y consultar su historial de estadía.' },
        { label: 'Administradores y dueños', detail: 'Gestionan habitaciones, pagos, ocupación y reportes del albergue.' },
        { label: 'Dos perfiles de acceso', detail: 'Cada usuario entra con permisos distintos según su rol dentro del sistema.' }
      ]
    },
    {
      id: 'costs',
      title: 'Estructura de costos',
      subtitle: 'Cost Structure',
      icon: 'trending-up',
      summary: 'Equipo, infraestructura y correo',
      metric: '4 rubros de costo',
      points: [
        { label: 'Equipo de desarrollo y pruebas', detail: 'Salarios del tiempo dedicado a construir, probar y dar soporte al sistema.' },
        { label: 'Infraestructura', detail: 'Alojamiento del servidor Node.js y de la base de datos MySQL.' },
        { label: 'Servicio de correo', detail: 'Envío de notificaciones automáticas a estudiantes y administradores.' },
        { label: 'Documentación y soporte', detail: 'Material de usuario, manuales de uso y mantenimiento del proyecto.' }
      ]
    },
    {
      id: 'revenue',
      title: 'Fuentes de ingresos',
      subtitle: 'Revenue Streams',
      icon: 'credit-card',
      summary: 'Renta y hospedaje de estudiantes',
      metric: '1 fuente principal',
      points: [
        { label: 'Renta y hospedaje', detail: 'Ingreso principal generado por el alquiler de espacios a estudiantes.' },
        { label: 'Gestión interna, no marketplace', detail: 'SICPES no intermedia ventas entre terceros: administra la operación propia.' },
        { label: 'Sin comisión del sistema', detail: 'El software no retiene porcentaje de las transacciones del albergue.' }
      ]
    }
  ];

  window.SICPES_CANVAS = { icons: icons, blocks: blocks };
})();