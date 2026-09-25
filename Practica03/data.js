// data.js — Contenido del Business Model Canvas de Spotify.
// Cada bloque: id (para el grid), título, descripción breve,
// resumen corto (una línea en la tarjeta) y 3-5 puntos específicos.

const BMC_DATA = [
  {
    id: "key-partners",
    title: "Socios clave",
    description:
      "Acuerdos con la industria musical, fabricantes de hardware y proveedores tecnológicos que hacen posible el catálogo y la llegada a cada dispositivo.",
    resumen: "Alianzas con la industria musical.",
    points: [
      "Sellos discográficos: Universal, Sony y Warner",
      "Distribuidoras independientes: DistroKid, TuneCore",
      "Editores y gestoras de derechos (Merlin, ASCAP, BMI)",
      "Fabricantes de hardware y autos (Apple, Google, coches)",
      "Proveedores de nube y analítica de datos",
    ],
  },
  {
    id: "key-activities",
    title: "Actividades clave",
    description:
      "Las operaciones diarias que mantienen el servicio en marcha: licencias, desarrollo de producto, algoritmos y pagos a la industria.",
    resumen: "Operaciones y licencias diarias.",
    points: [
      "Licenciamiento y renovación del catálogo musical",
      "Desarrollo multiplataforma: Android, iOS, web, escritorio, TV",
      "Refinamiento de los algoritmos de recomendación",
      "Operaciones de regalías y pagos a artistas",
      "Lanzamientos de producto: Wrapped, podcasts, audiolibros",
    ],
  },
  {
    id: "key-resources",
    title: "Recursos clave",
    description:
      "Los activos centrales que sostienen la propuesta de valor de Spotify y son difíciles de replicar.",
    resumen: "Activos difíciles de replicar.",
    points: [
      "Catálogo de música, podcasts y audiolibros",
      "Datos de escucha de más de 600 M de usuarios",
      "Algoritmo propio y playlists editoriales",
      "Marca global y relaciones con la industria",
      "Infraestructura en la nube (Google Cloud)",
    ],
  },
  {
    id: "value-props",
    title: "Propuesta de valor",
    description:
      "Lo que Spotify ofrece a cada tipo de usuario: acceso ilimitado, modelo freemium y una experiencia personalizada.",
    resumen: "Acceso ilimitado, freemium.",
    points: [
      "Acceso ilimitado a música, podcasts y audiolibros",
      "Plan gratuito con anuncios o Premium sin anuncios",
      "Descubrimiento personalizado: Discover Weekly, Daily Mix, Wrapped",
      "Streaming multiplataforma sin interrupciones",
      "Offline, alta calidad y listas colaborativas",
    ],
  },
  {
    id: "customer-relations",
    title: "Relación con clientes",
    description:
      "Cómo Spotify capta, atiende y retiene a sus millones de oyentes a escala y a través de la propia plataforma.",
    resumen: "Fidelizar oyentes a escala.",
    points: [
      "Autoservicio digital: alta, pago y cancelación online",
      "Recomendaciones y playlists personales continuas",
      "Blend y listas colaborativas para compartir",
      "Soporte en app y centro de ayuda",
    ],
  },
  {
    id: "channels",
    title: "Canales",
    description:
      "Los puntos de contacto por donde Spotify entrega el servicio en cada dispositivo del usuario.",
    resumen: "Toda plataforma y dispositivo.",
    points: [
      "Apps nativas en Android e iOS (incluye wearables)",
      "Cliente de escritorio para Windows y macOS",
      "Web Player y app de Smart TV",
      "Consolas, automóviles y asistentes de voz",
      "Tiendas de apps y recomendación social",
    ],
  },
  {
    id: "customer-segments",
    title: "Segmentos de clientes",
    description:
      "Los grupos de clientes que Spotify atiende, tanto oyentes finales como anunciantes y creadores.",
    resumen: "Oyentes, marcas y creadores.",
    points: [
      "Oyentes del plan gratuito con publicidad",
      "Suscriptores Premium (~250 millones)",
      "Planes Estudiantes, Duo y Familia",
      "Anunciantes y marcas que compran audio",
      "Artistas, sellos y podcasters de la plataforma",
    ],
  },
  {
    id: "cost-structure",
    title: "Estructura de costos",
    description:
      "La estructura de gastos que sostiene la operación global del servicio de streaming.",
    resumen: "Regalías y operación global.",
    points: [
      "Regalías por streaming (~2/3 de los ingresos)",
      "Licencias y contenido exclusivo (podcasts, audiolibros)",
      "I+D de producto, algoritmos y contenidos",
      "Marketing, ventas y operación global",
      "Infraestructura técnica y soporte al usuario",
    ],
  },
  {
    id: "revenue-streams",
    title: "Fuentes de ingresos",
    description:
      "Las fuentes de dinero que generan los ingresos del negocio, lideradas por la suscripción.",
    resumen: "Suscripción y publicidad.",
    points: [
      "Suscripciones Premium (mensuales y anuales)",
      "Planes individual, Duo, Familiar y Estudiantil",
      "Publicidad en el plan gratuito (audio, video, display)",
      "Audiolibros y extras premium de pago",
      "Entradas a conciertos y merchandising de artistas",
    ],
  },
];