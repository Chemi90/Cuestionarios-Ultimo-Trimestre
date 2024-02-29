document.addEventListener("DOMContentLoaded", () => {
  // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
  // Similar al proporcionado en el código de referencia
  const quizData = [
    {
      question: "1. ¿Qué permite principalmente Odoo Studio?",
      a: "Personalización de aplicaciones sin necesidad de programación",
      b: "Creación de bases de datos complejas",
      c: "Automatización de la gestión de proyectos",
      d: "Análisis avanzado de datos empresariales",
      correct: "a",
      explanation: "Odoo Studio permite la personalización del sistema Odoo sin requerir conocimientos de programación, incluyendo la modificación de formularios y la creación de campos personalizados."
  },
  {
      question: "2. ¿Cuál es una de las principales razones para utilizar Odoo Studio?",
      a: "Soporte técnico 24/7",
      b: "Integración con redes sociales",
      c: "Personalización sin necesidad de programación",
      d: "Almacenamiento ilimitado de datos",
      correct: "c",
      explanation: "Una razón clave para usar Odoo Studio es su capacidad para personalizar aplicaciones y flujos de trabajo sin necesidad de tener conocimientos de programación."
  },
  {
      question: "3. ¿Qué tipo de software se adapta a cualquier empresa intentando cubrir los procesos más habituales?",
      a: "Software a medida",
      b: "Software híbrido",
      c: "Software estándar",
      d: "Software de código abierto",
      correct: "c",
      explanation: "El software estándar es desarrollado para ser implementado en cualquier tipo de empresa, cubriendo los procesos de gestión más habituales."
  },
  {
      question: "4. ¿Cómo se pueden realizar diseños en Odoo Studio?",
      a: "Programación en Python",
      b: "Mediante un sistema de Drag and Drop",
      c: "Usando hojas de estilo CSS",
      d: "A través de la escritura de código HTML",
      correct: "b",
      explanation: "Odoo Studio permite realizar diseños arrastrando bloques predefinidos mediante un sistema de Drag and Drop, sin necesidad de conocimientos de programación."
  },
  {
      question: "5. ¿Qué ofrece Odoo Studio para la creación de aplicaciones?",
      a: "Plantillas prediseñadas",
      b: "Herramientas de construcción de modelos de datos",
      c: "Servidores dedicados para pruebas",
      d: "Dominios personalizados gratuitos",
      correct: "b",
      explanation: "Odoo Studio ofrece herramientas para la construcción de modelos de datos, permitiendo la personalización y automatización de aplicaciones."
  },
  {
      question: "6. ¿Qué beneficio proporciona la utilización de Odoo Studio en términos de costos?",
      a: "Subvenciones para startups",
      b: "Ahorro de tiempo y costes",
      c: "Consultoría gratuita",
      d: "Licencias de software gratuitas",
      correct: "b",
      explanation: "Al utilizar Odoo Studio se pueden ahorrar tiempo y costes significativos al evitar el desarrollo de aplicaciones personalizadas desde cero gracias a su interfaz visual intuitiva."
  },
  {
      question: "7. ¿Qué nivel de personalización permite Odoo Studio?",
      a: "Solo ajustes menores en aplicaciones existentes",
      b: "Creación de nuevas aplicaciones sin límites de personalización",
      c: "Personalización de informes y flujos de trabajo únicamente",
      d: "Personalización y ajuste de aplicaciones existentes y creación de nuevas aplicaciones",
      correct: "d",
      explanation: "Odoo Studio brinda una amplia flexibilidad para personalizar y ajustar aplicaciones existentes, así como para crear nuevas aplicaciones según las necesidades específicas."
  },
  {
    question: "8. ¿Qué representa la fase de 'Iniciación' en la implantación de sistemas ERP-CRM?",
    a: "Desarrollo del software",
    b: "Pruebas del sistema",
    c: "Estudio del ámbito del proyecto y viabilidad",
    d: "Formación del personal",
    correct: "c",
    explanation: "La fase de 'Iniciación' implica estudiar el ámbito del proyecto, realizar estudios de viabilidad técnica, económica y organizativa, y planificar el proyecto."
},
{
    question: "9. ¿Cuál es el propósito de realizar un estudio de viabilidad en la implantación de sistemas ERP-CRM?",
    a: "Determinar la capacidad del servidor",
    b: "Evaluar la necesidad de formación del personal",
    c: "Decidir sobre la adquisición de nuevo hardware",
    d: "Determinar la viabilidad técnica, económica y organizativa del proyecto",
    correct: "d",
    explanation: "Realizar un estudio de viabilidad tiene como objetivo evaluar si el proyecto es técnicamente posible, económicamente viable y organizativamente beneficioso."
},
{
    question: "10. ¿Qué importancia tiene determinar el nivel de cambio del sistema actual al nuevo sistema en la implantación de ERP-CRM?",
    a: "Identificar los elementos productivos afectados y planificar las modificaciones",
    b: "Seleccionar el software de ERP-CRM más adecuado",
    c: "Determinar el presupuesto del proyecto",
    d: "Configurar el nuevo sistema",
    correct: "a",
    explanation: "Determinar el nivel de cambio ayuda a identificar todos los elementos que se verán afectados y a planificar las modificaciones necesarias."
},
{
    question: "11. ¿Qué documento es esencial para explicar el funcionamiento empresarial a alto nivel en la implantación de sistemas ERP-CRM?",
    a: "Plan de proyecto",
    b: "Especificación funcional",
    c: "Informe de cambios",
    d: "Manual de usuario",
    correct: "b",
    explanation: "La especificación funcional es crucial para explicar el funcionamiento empresarial a alto nivel y las relaciones entre cada proceso productivo."
},
{
    question: "12. En la fase de 'Desarrollo' de la implantación de sistemas ERP-CRM, ¿qué se crea sobre el papel?",
    a: "El sistema informático completo",
    b: "Un prototipo del sistema",
    c: "El plan de pruebas",
    d: "La documentación técnica",
    correct: "a",
    explanation: "En la fase de 'Desarrollo', se crea el sistema informático completo sobre el papel partiendo de la especificación funcional."
},
{
    question: "13. ¿Qué se determina en la fase de 'Desarrollo – Diseño Físico' en la implantación de sistemas ERP-CRM?",
    a: "Los módulos de Odoo a activar",
    b: "La estructura física óptima del sistema",
    c: "El contenido de la formación del personal",
    d: "Las especificaciones de los informes personalizados",
    correct: "b",
    explanation: "En la fase de 'Desarrollo – Diseño Físico', se determina la estructura física óptima del sistema, considerando aspectos como la seguridad y el hardware necesario."
},
{
    question: "14. ¿Qué se revisa en la fase de 'Desarrollo – Revisión de Previsiones' en la implantación de sistemas ERP-CRM?",
    a: "La calidad del código del software",
    b: "El cumplimiento de los objetivos temporales según el plan de proyecto",
    c: "La efectividad de las pruebas de humo",
    d: "La documentación interna del proyecto",
    correct: "b",
    explanation: "En la fase de 'Desarrollo – Revisión de Previsiones', se revisa el plan de proyecto para determinar si se están cumpliendo los objetivos temporales."
},
{
  question: "15. ¿Qué ventaja ofrece Odoo Studio en cuanto al mantenimiento y actualizaciones de personalizaciones?",
  a: "Requiere reconfiguración manual para cada actualización",
  b: "No garantiza la compatibilidad con futuras actualizaciones",
  c: "Mantiene intactas las personalizaciones durante las actualizaciones",
  d: "Limita las personalizaciones a cambios visuales únicamente",
  correct: "c",
  explanation: "Odoo Studio asegura que las personalizaciones realizadas se mantengan intactas durante las actualizaciones del sistema, evitando así tener que rehacer ajustes manualmente."
},
{
  question: "16. ¿Qué relación pueden añadirse en Odoo Studio para enriquecer los modelos de datos?",
  a: "One2One",
  b: "Many2One",
  c: "Two2Two",
  d: "Single2Single",
  correct: "b",
  explanation: "Odoo Studio permite añadir relaciones Many2One entre modelos, lo que enriquece la estructura de datos permitiendo una interconexión eficiente entre diferentes entidades."
},
{
  question: "17. ¿Cuál es el propósito de crear recursos como wikis, manuales, y videotutoriales en la implantación de sistemas ERP-CRM?",
  a: "Reducir el costo de formación",
  b: "Incrementar el rendimiento del sistema",
  c: "Facilitar la búsqueda autónoma de información por parte de los usuarios",
  d: "Simplificar el mantenimiento del sistema",
  correct: "c",
  explanation: "Crear diversos tipos de recursos tiene como objetivo permitir que los usuarios busquen y accedan a la información de forma autónoma, mejorando así su experiencia y eficiencia al utilizar el sistema."
},
{
  question: "18. ¿Qué permite el diseño de la vista de lista en Odoo Studio?",
  a: "Modificar la interfaz de usuario a nivel de código",
  b: "Personalizar cómo se muestran los registros en listados",
  c: "Restringir el acceso a ciertos datos para usuarios específicos",
  d: "Aumentar la velocidad de procesamiento de datos",
  correct: "b",
  explanation: "El diseño de la vista de lista en Odoo Studio permite personalizar la manera en que los registros se presentan en los listados, mejorando la legibilidad y la experiencia de usuario."
},
{
  question: "19. ¿Qué tipo de relación se puede incluir en un modelo para relacionarlo con otro en Odoo Studio?",
  a: "One2Many",
  b: "Many2Many",
  c: "Single2Multiple",
  d: "Double2Single",
  correct: "a",
  explanation: "En Odoo Studio se pueden incluir relaciones One2Many entre modelos, lo que facilita la organización de estructuras de datos complejas permitiendo un registro vincularse a múltiples registros de otro modelo."
},
{
  question: "20. ¿En qué consiste la personalización de formularios en Odoo Studio?",
  a: "Agregar campos existentes en la base de datos",
  b: "Modificar el código fuente del ERP",
  c: "Agregar o modificar campos para mostrar información adicional",
  d: "Cambiar la configuración del servidor",
  correct: "c",
  explanation: "La personalización de formularios en Odoo Studio consiste en agregar o modificar campos para incluir información adicional, optimizando así los procesos de trabajo y la recopilación de datos."
},
{
  question: "21. ¿Cuál es la finalidad de las pruebas de humo en la implementación de sistemas ERP-CRM?",
  a: "Verificar la seguridad de la información",
  b: "Comprobar la funcionalidad básica y ausencia de defectos críticos",
  c: "Evaluar el rendimiento bajo carga pesada",
  d: "Asegurar la compatibilidad entre diferentes módulos",
  correct: "b",
  explanation: "Las pruebas de humo buscan comprobar que el sistema funciona correctamente en sus operaciones básicas y que no hay defectos críticos que impidan su operación normal."
},
{
  question: "22. ¿Cuál es una característica clave del software estándar en la gestión empresarial?",
  a: "Requiere configuración avanzada para cada empresa",
  b: "Es desarrollado para implantarse en cualquier tipo de empresa",
  c: "Ofrece soluciones exclusivas para cada sector",
  d: "Necesita desarrollo adicional para cubrir los procesos más habituales",
  correct: "b",
  explanation: "El software estándar es diseñado para ser implantado en cualquier tipo de empresa, intentando cubrir los procesos de gestión más habituales."
},
{
  question: "23. ¿Qué ventaja ofrece el software híbrido en la gestión empresarial?",
  a: "No requiere modificaciones ni adaptaciones",
  b: "Permite adaptaciones basadas en las necesidades específicas de la empresa",
  c: "Se desarrolla desde cero para cada empresa",
  d: "Es completamente automatizado sin necesidad de intervención humana",
  correct: "b",
  explanation: "El software híbrido permite adaptaciones a partir de módulos estándar para satisfacer necesidades específicas de la empresa."
},
{
  question: "24. ¿Qué es el software a medida en la gestión empresarial?",
  a: "Un sistema que se adapta automáticamente a los cambios empresariales",
  b: "Software que solo permite cambios visuales",
  c: "Software desarrollado específicamente para los procesos de negocio de una empresa",
  d: "Una solución de bajo costo para startups",
  correct: "c",
  explanation: "El software a medida es desarrollado desde cero, específicamente para adaptarse a los procesos de negocio únicos de una empresa."
},
{
  question: "25. ¿Qué ventaja principal ofrece Odoo Studio para la personalización de sistemas ERP?",
  a: "Eliminación de la necesidad de programación para ajustes",
  b: "Integración directa con sistemas externos sin configuración",
  c: "Actualizaciones automáticas sin intervención del usuario",
  d: "Soporte técnico gratuito ilimitado",
  correct: "a",
  explanation: "Odoo Studio permite realizar ajustes y personalizaciones sin necesidad de tener conocimientos de programación."
},
{
  question: "26. ¿Cómo afecta el uso de Odoo Studio al mantenimiento y actualizaciones del sistema?",
  a: "Complica el proceso de actualización",
  b: "Hace que las actualizaciones sean innecesarias",
  c: "Simplifica el mantenimiento y las actualizaciones",
  d: "Requiere reconfiguración manual después de cada actualización",
  correct: "c",
  explanation: "Utilizar Odoo Studio para personalizar el sistema hace que el mantenimiento y las actualizaciones futuras sean más sencillas, manteniendo intactas las personalizaciones."
},
{
  question: "27. ¿Qué permite la creación de una aplicación básica en Odoo Studio?",
  a: "Implementación inmediata sin pruebas necesarias",
  b: "Personalización de formularios y listados sin escribir código",
  c: "Conexión automática con todas las aplicaciones existentes",
  d: "Creación de bases de datos complejas automáticamente",
  correct: "b",
  explanation: "Odoo Studio facilita la personalización de formularios y listados, así como la creación de aplicaciones sin necesidad de escribir código."
},
{
  question: "28. ¿Qué tipo de relaciones se pueden añadir en Odoo Studio para enriquecer los modelos de datos?",
  a: "Relaciones One2One exclusivamente",
  b: "Solo relaciones directas sin tipos específicos",
  c: "Relaciones Many2One y One2Many",
  d: "Ninguna relación puede ser añadida sin programación",
  correct: "c",
  explanation: "Odoo Studio permite añadir relaciones Many2One y One2Many entre modelos, enriqueciendo así la estructura de datos."
},
{
  question: "29. ¿Qué facilita Odoo Studio en la creación de aplicaciones?",
  a: "Desarrollo exclusivo mediante programación avanzada",
  b: "Creación y personalización de aplicaciones sin necesidad de programación",
  c: "Integración automática con plataformas de terceros sin configuración",
  d: "Automatización de la migración de datos sin intervención del usuario",
  correct: "b",
  explanation: "Odoo Studio permite la creación y personalización de aplicaciones sin necesidad de conocimientos de programación, facilitando el ajuste a necesidades específicas."
},
{
  question: "30. ¿Cuál es una ventaja clave de utilizar software estándar en la gestión empresarial?",
  a: "Configuración y adaptación automática a cualquier empresa",
  b: "Desarrollo personalizado para cada proceso empresarial",
  c: "Implantación rápida en cualquier tipo de empresa",
  d: "Soporte técnico personalizado y dedicado",
  correct: "c",
  explanation: "El software estándar ofrece la ventaja de una implantación rápida y sencilla en cualquier tipo de empresa, cubriendo procesos de gestión habituales."
},
{
  question: "31. ¿Qué caracteriza al software híbrido en la gestión empresarial?",
  a: "No permite modificaciones una vez implantado",
  b: "Ofrece adaptaciones a partir de módulos estándar según necesidades específicas",
  c: "Es exclusivamente online sin posibilidad de ejecución local",
  d: "Requiere programación manual para cualquier adaptación",
  correct: "b",
  explanation: "El software híbrido permite adaptaciones específicas para cada empresa a partir de módulos estándar, combinando flexibilidad y eficiencia."
},
{
  question: "32. ¿Qué proceso se simplifica con el uso de Odoo Studio para personalizaciones?",
  a: "Integración de inteligencia artificial en todas las aplicaciones",
  b: "Mantenimiento y actualizaciones del sistema personalizado",
  c: "Conversión automática de aplicaciones en código abierto",
  d: "Automatización completa de los procesos empresariales sin configuración",
  correct: "b",
  explanation: "Odoo Studio facilita el mantenimiento y las actualizaciones de las personalizaciones realizadas, manteniéndolas intactas a lo largo del tiempo."
},
{
  question: "33. ¿Cómo se gestionan los informes personalizados en Odoo?",
  a: "A través de la programación manual en el servidor",
  b: "Utilizando el menú técnico dentro de Odoo",
  c: "Contactando al soporte técnico de Odoo para cada modificación",
  d: "Mediante plugins externos desarrollados por terceros",
  correct: "b",
  explanation: "Los informes personalizados en Odoo se gestionan a través del menú técnico, ofreciendo una manera accesible y directa para su creación y modificación."
},
{
  question: "34. ¿Qué se recomienda para la asistencia al soporte en la adaptación del ERP a una empresa?",
  a: "Mantener un equipo de IT interno para desarrollos constantes",
  b: "Instalar herramientas de soporte remoto e informar a los administradores",
  c: "Subcontratar servicios de soporte técnico externo exclusivamente",
  d: "Limitar el acceso al soporte técnico a casos de emergencia",
  correct: "b",
  explanation: "Se recomienda instalar herramientas que ayuden a dar soporte de forma remota, facilitando la gestión y resolución de incidencias eficazmente."
},
{
  question: "35. ¿Qué permite la relación Many2One en la creación de aplicaciones en Odoo Studio?",
  a: "Vincular un registro de un modelo con varios registros de otro modelo",
  b: "Crear una relación bidireccional entre dos modelos",
  c: "Establecer una relación en la que un registro de un modelo se relaciona con uno y solo un registro de otro modelo",
  d: "Generar automáticamente relaciones entre todos los modelos de la base de datos",
  correct: "c",
  explanation: "La relación Many2One permite que un registro de un modelo se relacione con uno y solo un registro de otro modelo, estableciendo una conexión directa y específica entre ellos."
},
{
  question: "36. ¿Qué objetivo tiene la creación de wikis, manuales y videotutoriales en la fase de formación y recursos?",
  a: "Sustituir completamente la formación presencial",
  b: "Ofrecer soporte técnico en tiempo real",
  c: "Facilitar la búsqueda autónoma de información por parte de los usuarios",
  d: "Cumplir con requisitos legales de documentación",
  correct: "c",
  explanation: "La creación de estos recursos tiene como finalidad que los usuarios puedan buscar y acceder a la información de forma autónoma, mejorando así la eficiencia en la resolución de dudas o problemas."
},
{
  question: "37. ¿Qué representa la 'Especificación Funcional' en el proceso de implantación de sistemas ERP-CRM?",
  a: "Un documento que detalla las pruebas a realizar en el sistema",
  b: "El contrato final entre el proveedor y la empresa cliente",
  c: "Un listado de los módulos de Odoo a activar",
  d: "Un documento que explica el funcionamiento empresarial a alto nivel",
  correct: "d",
  explanation: "La Especificación Funcional es un documento crucial que detalla el funcionamiento empresarial a alto nivel, sirviendo como guía para el desarrollo y configuración del sistema."
},
{
  question: "38. ¿Qué herramienta se utiliza para definir la temporalización de tareas en la planificación de proyectos?",
  a: "Diagramas de flujo de datos",
  b: "Diagramas de Gantt",
  c: "Checklists de pruebas",
  d: "Especificaciones técnicas detalladas",
  correct: "b",
  explanation: "Los diagramas de Gantt se utilizan especialmente para definir la temporalización de las tareas y sus dependencias en la planificación de proyectos."
},
{
  question: "39. ¿Cuál es el propósito de la fase de 'Desarrollo - Diseño Físico' en la implantación de sistemas ERP-CRM?",
  a: "Configurar los módulos de Odoo según las necesidades empresariales",
  b: "Determinar la estructura física óptima del sistema y los requisitos de seguridad",
  c: "Realizar un análisis detallado de las especificaciones funcionales",
  d: "Revisar el cumplimiento de los objetivos temporales del proyecto",
  correct: "b",
  explanation: "En la fase de 'Desarrollo - Diseño Físico', se determina la estructura física óptima del sistema, incluyendo consideraciones de seguridad y la elección de equipos necesarios."
},
{
  question: "40. ¿En qué consiste el 'Diseño Lógico' durante la fase de desarrollo?",
  a: "Seleccionar y configurar los módulos de Odoo a utilizar",
  b: "Establecer la conexión física entre los distintos dispositivos de hardware",
  c: "Desarrollar el código fuente del software a medida",
  d: "Preparar la documentación técnica del proyecto",
  correct: "a",
  explanation: "El 'Diseño Lógico' implica determinar qué módulos de Odoo se activarán y cómo deben ser configurados para cumplir con las necesidades del proyecto."
},
{
  question: "41. ¿Qué importancia tiene la 'Revisión de Previsiones' en la fase de desarrollo?",
  a: "Revisar el plan de proyecto para ajustar los objetivos temporales",
  b: "Establecer las previsiones de ventas futuras con el nuevo sistema",
  c: "Prever el impacto económico del nuevo sistema ERP-CRM",
  d: "Evaluar la precisión de las estimaciones de costos de implementación",
  correct: "a",
  explanation: "La 'Revisión de Previsiones' es crucial para asegurar que el proyecto avanza según lo planeado, permitiendo ajustar el plan según sea necesario para cumplir con los plazos establecidos."
},
{
  question: "42. ¿Cuál es el objetivo de realizar pruebas de humo en la implementación de sistemas ERP-CRM?",
  a: "Evaluar la seguridad del sistema contra ataques externos",
  b: "Comprobar la funcionalidad básica y ausencia de defectos críticos",
  c: "Verificar la compatibilidad del ERP-CRM con otros sistemas de la empresa",
  d: "Probar el rendimiento del sistema bajo cargas de trabajo pesadas",
  correct: "b",
  explanation: "Las pruebas de humo tienen como objetivo realizar una revisión rápida del software para asegurar que las funciones básicas operan correctamente y no existen defectos críticos."
},
{
  question: "43. ¿Qué se busca con la 'Adquisición de Hardware' durante la fase de implementación?",
  a: "Seleccionar el hardware más económico disponible en el mercado",
  b: "Evaluar la necesidad de dispositivos móviles para acceso remoto",
  c: "Disponer del material necesario para la implementación lo antes posible",
  d: "Integrar soluciones de almacenamiento en la nube para reducir costos",
  correct: "c",
  explanation: "La adquisición de hardware busca disponer de todo el material necesario para la implementación del sistema de forma oportuna, asegurando así la continuidad del proyecto."
},
{
  question: "44. ¿Qué acción se recomienda para mejorar la asistencia al soporte técnico en la implementación de sistemas ERP-CRM?",
  a: "Limitar el soporte técnico a intervenciones presenciales",
  b: "Instalar herramientas que faciliten el soporte de forma remota",
  c: "Subcontratar el soporte técnico a empresas externas",
  d: "Depender únicamente del soporte técnico proporcionado por el fabricante del software",
  correct: "b",
  explanation: "Instalar herramientas que permitan brindar asistencia técnica de forma remota mejora significativamente la eficacia y rapidez del soporte."
},
{
  question: "45. ¿Qué se debe crear para facilitar la autogestión de los usuarios en sistemas ERP-CRM?",
  a: "Un sistema de tickets para consultas",
  b: "Un foro de discusión para usuarios",
  c: "Recursos como wikis, manuales, y videotutoriales",
  d: "Un chatbot para responder preguntas frecuentes",
  correct: "c",
  explanation: "Crear recursos como wikis, manuales paso a paso, y videotutoriales permite a los usuarios buscar y acceder a la información de manera autónoma."
},
{
  question: "46. ¿Qué característica importante tienen las personalizaciones realizadas con Odoo Studio respecto a las actualizaciones del sistema?",
  a: "Las personalizaciones deben rehacerse con cada actualización",
  b: "Las personalizaciones se pierden si no se realizan por un desarrollador certificado",
  c: "Las personalizaciones realizadas se mantienen intactas durante las actualizaciones",
  d: "Odoo Studio no permite personalizaciones que afecten las actualizaciones del sistema",
  correct: "c",
  explanation: "Las personalizaciones hechas con Odoo Studio se diseñaron para permanecer intactas incluso después de las actualizaciones, lo que simplifica el mantenimiento."
},
{
  question: "47. ¿Cuál es el primer paso para crear una aplicación básica en Odoo Studio?",
  a: "Seleccionar un modelo preexistente para modificar",
  b: "Crear un nuevo modelo desde cero",
  c: "Importar un modelo de datos desde otra aplicación",
  d: "Consultar con un desarrollador para el diseño del modelo",
  correct: "b",
  explanation: "Para crear una aplicación básica en Odoo Studio, el primer paso es crear un nuevo modelo, estableciendo la base para la personalización y funcionalidad de la aplicación."
},
{
  question: "48. ¿Qué permite la relación Many2One en la creación de aplicaciones en Odoo Studio?",
  a: "Vincular varios registros de un modelo con un registro de otro modelo",
  b: "Crear una base de datos compartida entre varias aplicaciones",
  c: "Establecer múltiples conexiones entre dos modelos distintos",
  d: "Asignar un único registro de un modelo a varios registros de otro modelo",
  correct: "a",
  explanation: "La relación Many2One permite vincular varios registros de un modelo con un único registro de otro modelo, facilitando la organización y referencia entre datos."
},
{
  question: "49. En la implementación de sistemas ERP-CRM, ¿qué importancia tiene la adquisición de hardware adecuado?",
  a: "Es esencial para la escalabilidad futura del sistema",
  b: "Permite una transición suave de sistemas antiguos a nuevos",
  c: "Garantiza la compatibilidad con todas las versiones de software",
  d: "Reduce la necesidad de soporte técnico externo",
  correct: "b",
  explanation: "La adquisición de hardware adecuado es crucial para garantizar una transición fluida entre sistemas antiguos y nuevos, así como para el correcto desempeño del sistema implementado."
},
{
  question: "50. ¿Qué se revisa en la fase de 'Revisión de Previsiones' durante el desarrollo de un sistema ERP-CRM?",
  a: "La adaptación de los empleados al nuevo sistema",
  b: "La precisión de las estimaciones de costos y tiempo",
  c: "El cumplimiento de los objetivos de calidad del software",
  d: "La funcionalidad del hardware adquirido",
  correct: "b",
  explanation: "En la fase de 'Revisión de Previsiones', se revisa la precisión de las estimaciones iniciales de costos y tiempo para asegurar que el proyecto se mantiene dentro del presupuesto y el calendario previstos."
}
  ];

  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");

  function loadQuiz() {
    const quizQuestions = quizData
      .map((q, index) => {
        return `
            <div class="question" id="question-${index}">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
      })
      .join("");
    quizForm.innerHTML = quizQuestions;
  }

  function submitQuiz() {
    const answers = quizData.map((_, index) => {
      return document.querySelector(`input[name="question${index}"]:checked`)
        ?.value;
    });

    let score = 0;
    let resultsHTML = "";

    answers.forEach((answer, index) => {
      const questionElement = document.getElementById(`question-${index}`);
      if (answer === quizData[index].correct) {
        score++;
        resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${
          index + 1
        }: correcta.</b></a> ${quizData[index].explanation}</p>`;
        questionElement.classList.remove("incorrect");
      } else {
        resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${
          index + 1
        }: INCORRECTA.</b></a> La respuesta correcta era '${
          quizData[index].correct
        }'. ${quizData[index].explanation}</p>`;
        questionElement.classList.add("incorrect");
      }
    });

    const finalScore = (score / quizData.length) * 10;
    resultsHTML =
      `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

    resultDiv.innerHTML = resultsHTML;
  }

  window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
  loadQuiz();
});
