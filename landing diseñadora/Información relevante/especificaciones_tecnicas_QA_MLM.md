# Especificaciones Técnicas y QA — Landing MLM

Documento de referencia para auditoría e implementación en Claude Code/Codex.  
Objetivo: comparar el repositorio actual con esta especificación y corregir solo lo necesario.

---

## 1. MAPA DE ESTRUCTURA Y FLUJO

### 1.1 Páginas obligatorias
- Home / inicio
- Sobre mi / Nosotros / Equipo
- Servicios / Qué hacemos

### 1.2 Páginas o secciones opcionales
- Portfolio / Proyectos
- Blog / Podcast
- Contacto

### 1.3 Estructura obligatoria de la Home
Orden recomendado para la página de inicio:

1. Titular: promesa
2. Subtítulo o Copete + CTA
3. Situación del cliente - Dolores - Problema
4. Qué pasa si no lo soluciona
5. Qué necesita para evitarlo
6. Tu solución / propuesta de valor
7. Autoridad / Quién sos
8. Testimonios / Casos de éxito
9. Lead magnet / Guía gratuita
10. Llamada final a la acción
11. Contacto

### 1.4 Orden de secciones para el sitio actual MLM

#### Sección 01 — Header / navegación
- Logo MLM.
- Navegación simple.
- Eliminar el punto separador entre palabras si aparece en el slogan o línea superior.
- CTA visible: `Agenda una asesoría inicial`.

#### Sección 02 — Hero / Inicio
Debe abrir con la promesa principal, bajada, copete y CTA.

Contenido requerido:
- Titular principal.
- Bajada.
- Copete.
- CTA principal.

#### Sección 03 — Problema / situación del cliente
Debe explicar el contexto del usuario:
- Propiedad comprada como inversión.
- Proyecto inmobiliario con potencial.
- Departamento publicado hace meses sin concretar venta.
- Arriendo con ocupación, tarifas o rentabilidad bajo lo esperado.
- Dudas del cliente.
- Problema central: percepción.

#### Sección 04 — Consecuencia de no resolverlo
Debe explicar qué ocurre cuando la propiedad no transmite todo su valor:
- Compite por precio.
- Se vuelve una más.
- Pierde fuerza comercial.
- Demora más en venderse.
- Tiene menos consultas.
- Recibe ofertas más bajas.
- Puede bajar ocupación o tarifa en arriendos de corta duración.

#### Sección 05 — Qué necesita para evitarlo
Debe comunicar la idea central:
- No ser la opción más barata.
- Ser la más deseada.
- Cada decisión debe tener sentido.
- Una propiedad bien trabajada se ve, se entiende, se recuerda y se percibe mejor.

#### Sección 06 — Solución / propuesta de valor
Debe explicar qué hace MLM desde el interiorismo estratégico:
- Transformar propiedades nuevas o con bajo desempeño.
- Combinar diseño, funcionalidad, experiencia comercial y conocimiento inmobiliario.
- Analizar percepción de compradores, arrendatarios o huéspedes.
- Trabajar en venta, arriendo, departamentos piloto, propiedades de inversión, optimización de espacios y arriendos de corta duración.

#### Sección 07 — Autoridad / Quién soy
Debe presentarse Loreto Mujica antes del contenido final de conversión para generar confianza.

Debe incluir:
- Nombre.
- Rol.
- Experiencia en diseño gráfico, publicidad, marketing inmobiliario e interiorismo.
- Mirada estética + visión comercial.
- Experiencia personal con departamento en Lo Barnechea como inversión.

#### Sección 08 — Testimonios / casos de éxito
Debe incluir 3 casos:
1. Departamento de inversión preparado para destacar.
2. Propiedades que dejan de ser “una más”.
3. Arriendos de corta duración con mirada integral.

Notas internas de contenido:
- Caso 1 puede vincularse al departamento de El Gabino y sus fotos, si esos assets existen.
- Caso 2 puede vincularse a San Enrique, si esos assets existen.
- Caso 3 puede vincularse a casa de Anibal / Laguna, si esos assets existen.

#### Sección 09 — Lead magnet / Guía gratuita
Debe ir al final.  
La guía no debe ubicarse al inicio.  
Debe funcionar como recurso descargable a cambio de datos, especialmente email.

Debe incluir:
- Título de guía.
- Bajada.
- Lista de lo que identifica la guía.
- CTA: `Descargar guía gratuita`.

#### Sección 10 — Llamada final a la acción
Debe cerrar con mensaje de conversión y CTA principal/secundario.

#### Sección 11 — Contacto / agenda asesoría
Debe incluir formulario o bloque de contacto con:
- Nombre.
- Email.
- Tipo de propiedad.
- Contexto.
- CTA: `Solicitar asesoría` o `Agendar asesoría inicial`.

Canal de contacto:
- WhatsApp se mantiene como canal principal si ya está implementado.
- El mensaje predeterminado sugerido para WhatsApp es: `Hola, vi la página de MLM y me gustaría saber un poco más sobre cómo trabajan.`

Opciones del campo “Tipo de propiedad”:
1. PROYECTO INMOBILIARIO: PILOTO, AREAS COMUNES, SALAS DE VENTA
2. INVERSIÓNISTA: casa o depto, arriendo de corta duración
3. arriendos de corta duración + venta
4. ARRIENDO CORTA DURACIÓN, SEGUNDA VIVIENDA
5. OTRO

Información de asesoría:
- `PONER 1,5 UF P/HORA, ASESORÍA PRESENCIAL EN STGO.`
- `resto del país más extrangero: Asesoría Remota`
- `desarrollar esto!`

---

## 2. CHECKLIST COMPLETO DE CAMBIOS Y REQUISITOS

### Estructura y orden
- [ ] El sitio contiene Home / Inicio.
- [ ] El sitio contiene Sobre mi / Nosotros / Equipo.
- [ ] El sitio contiene Servicios / Qué hacemos.
- [ ] La Home respeta el flujo: promesa → copete/CTA → problema → consecuencia → necesidad → solución → autoridad → casos → lead magnet → CTA final → contacto.
- [ ] El lead magnet está al final, no en el hero ni en las primeras secciones.
- [ ] La sección Autoridad / Quién soy aparece antes de las etapas finales de conversión.
- [ ] El sitio mantiene la gráfica existente, ya aprobada, sin rediseñar innecesariamente.

### Hero
- [ ] El titular principal exacto está presente.
- [ ] La bajada exacta está presente.
- [ ] El copete exacto está presente.
- [ ] El CTA `Agenda una asesoría inicial` está presente.
- [ ] El hero comunica promesa, nicho y propuesta de valor.
- [ ] Se eliminó el punto entre palabras si aparece como separador no deseado.

### Contenido
- [ ] Los textos oficiales están incorporados sin cambiar su sentido.
- [ ] No hay textos inventados que contradigan los documentos.
- [ ] El problema principal queda definido como percepción, no solo precio ni ubicación.
- [ ] La solución se comunica como interiorismo estratégico, no decoración.
- [ ] Se comunica la diferencia entre verse mejor, percibirse mejor y elegirse antes.

### Casos de éxito
- [ ] Hay 3 casos de éxito.
- [ ] Caso 1: Departamento de inversión preparado para destacar.
- [ ] Caso 2: Propiedades que dejan de ser “una más”.
- [ ] Caso 3: Arriendos de corta duración con mirada integral.
- [ ] Si existen assets de El Gabino, San Enrique o Anibal/Laguna, se usan en los casos correspondientes.
- [ ] Si no existen assets, no se inventan enlaces ni imágenes.

### Lead magnet
- [ ] El bloque de guía está ubicado al final.
- [ ] El título `¿Tu propiedad está lista para competir?` está presente.
- [ ] El CTA `Descargar guía gratuita` está presente.
- [ ] La guía solicita email o datos antes de la descarga, si el stack permite implementarlo.
- [ ] Si no hay backend o integración, se deja una solución segura o preparada sin exponer credenciales.

### Contacto
- [ ] El bloque de contacto incluye WhatsApp, email e Instagram si están disponibles.
- [ ] El formulario o bloque de asesoría incluye nombre, email, tipo de propiedad y contexto.
- [ ] El campo tipo de propiedad incluye las 5 opciones oficiales.
- [ ] Se muestra la información de valor/hora y modalidad presencial/remota si corresponde.
- [ ] WhatsApp conserva mensaje predeterminado para identificar contactos desde web.

### Diseño y QA visual
- [ ] La gráfica general se mantiene 100% según la aprobación indicada.
- [ ] No se cambia la línea gráfica sin necesidad.
- [ ] No hay imágenes rotas.
- [ ] No hay textos cortados.
- [ ] No hay bordes negros o artefactos visuales no deseados.
- [ ] La navegación funciona en desktop y mobile.
- [ ] Los CTA funcionan.
- [ ] La página se ve bien en desktop, tablet y mobile.

### Técnica
- [ ] El proyecto compila sin errores.
- [ ] No se agregan dependencias innecesarias.
- [ ] No se exponen credenciales.
- [ ] No se eliminan assets útiles.
- [ ] No se implementan cambios cosméticos innecesarios si el código ya cumple.
- [ ] Se aplican cambios solo donde exista incumplimiento real.

---

## 3. REGLAS DE NEGOCIO ESTRICTAS MANDATORIAS

- La gráfica de la página debe mantenerse: `Jose, la gráfica de la pag me encanta... eso se mantiene 100%`.
- Lo que debe cambiar principalmente es el orden de los pasos de la página y los textos de cada sección.
- El sitio debe comunicar la promesa, nicho y propuesta de valor de MLM.
- El titular oficial es: `Diseñamos espacios que compiten por valor, no por precio.`
- MLM no debe presentarse como decoración genérica.
- La frase conceptual obligatoria es: `No vendo decoración. Diseño espacios con estrategia para generar mejores resultados.`
- El problema no debe centrarse solo en precio o ubicación; debe centrarse en percepción.
- La guía es un lead magnet y debe ir al final.
- Para descargar la guía, el usuario debe dejar su mail si la implementación lo permite.
- No se debe inventar contenido específico de proyectos si no está en los documentos o assets.
- No se deben usar imágenes antiguas o rotas.
- Si existen imágenes/fotos asociadas a casos específicos, deben usarse con criterio.
- Si no existen assets para El Gabino, San Enrique o Anibal/Laguna, no inventar rutas ni enlaces.
- El contacto puede mantenerse por WhatsApp.
- El mensaje predeterminado de WhatsApp debe permitir identificar que el usuario viene desde la web.
- Debe eliminarse el punto entre palabras si aparece como separador no deseado.
- Debe incorporarse la opción de asesoría presencial en Santiago y asesoría remota para resto del país/extranjero.
- Debe indicarse: `1,5 UF P/HORA` si se incluye información comercial de asesoría.
- No hacer cambios innecesarios si el repositorio ya cumple esta especificación.

---

## 4. DICCIONARIO DE TEXTOS Y CONTENIDO OFICIAL

### 4.1 Home / Inicio

#### Titular: promesa
```text
Diseñamos espacios que compiten por valor, no por precio.
```

#### Bajada
```text
Interiorismo estratégico para transformar propiedades nuevas o con bajo desempeño en activos más atractivos, competitivos y rentables.
```

#### Subtítulo o copete + CTA
```text
Ayudo a inversionistas, propietarios y empresas inmobiliarias a potenciar el valor comercial de sus propiedades a través de diseño, funcionalidad y visión de negocio.
```

```text
No se trata solo de decorar.
```

```text
Se trata de lograr que una propiedad se vea mejor, se perciba mejor y se elija antes.
```

```text
¿Tienes una propiedad que no está mostrando todo su potencial?
```

```text
Conversemos y revisemos juntos qué acciones podrían ayudarte a mejorar sus resultados.
```

```text
CTA: Agenda una asesoría inicial
```

### 4.2 Situación del cliente / dolores / problema
```text
Compraste una propiedad pensando que sería una buena inversión.
Desarrollaste un proyecto inmobiliario con potencial.
Tienes un departamento publicado hace meses y no logras concretar la venta.
O arriendas una propiedad, pero la ocupación, las tarifas o la rentabilidad no son las que esperabas.
Y entonces aparecen las dudas:
¿Tendré que bajar el precio?
¿Tendré que invertir más en publicidad?
¿Será culpa del mercado?
¿Habrá que seguir esperando?
La mayoría de las veces, el problema no está solo en el precio ni en la ubicación.
Está en cómo la propiedad está siendo percibida.
Hoy la competencia está a un clic.
El comprador, arrendatario o huésped compara, evalúa y decide en segundos.
Y si tu propiedad no logra destacar visualmente, generar confianza o despertar deseo, termina perdiéndose entre muchas alternativas similares.
```

### 4.3 Qué pasa si no lo soluciona
```text
Cuando una propiedad no transmite todo su valor, empieza a competir desde el lugar más difícil: el precio.
Se vuelve una más.
Pierde fuerza comercial.
Demora más en venderse.
Tiene menos consultas.
Recibe ofertas más bajas.
O en el caso de arriendos de corta duración, puede tener menor ocupación, tarifas más débiles y una experiencia menos memorable para los huéspedes.
Y muchas veces, para intentar corregirlo, se toman decisiones apuradas: comprar muebles sueltos, copiar referencias de Pinterest, sumar objetos sin una estrategia clara o invertir en publicidad antes de revisar si el producto realmente está preparado para competir.
El resultado suele ser el mismo: se gasta, pero no necesariamente se mejora.
```

### 4.4 Qué necesita para evitarlo
```text
No necesitas que tu propiedad sea la opción más barata.
Necesitas que sea la más deseada.
Para eso, cada decisión debe tener un sentido: qué mostrar, qué destacar, cómo ordenar el espacio, qué invertir, qué evitar y cómo construir una experiencia que conecte con la persona que va a comprar, arrendar o elegir esa propiedad.
Una propiedad bien trabajada no solo se ve mejor.
Se entiende mejor.
Se recuerda más.
Y se percibe con mayor valor.
Eso es lo que permite diferenciarla en un mercado donde muchas alternativas parecen iguales.
```

### 4.5 Tu solución / propuesta de valor
```text
Desde el interiorismo estratégico, transformo propiedades nuevas o con bajo desempeño en productos más atractivos, deseables y rentables.
Mi trabajo combina diseño, funcionalidad, experiencia comercial y conocimiento del mercado inmobiliario para tomar mejores decisiones sobre cada espacio.
Analizo cómo una propiedad será percibida por compradores, arrendatarios o huéspedes, y desde ahí defino qué cambios pueden aumentar su valor percibido, fortalecer su posicionamiento y mejorar sus resultados comerciales.
Trabajo en proyectos destinados a venta, arriendo, departamentos piloto, propiedades de inversión, optimización de espacios con bajo desempeño y arriendos de corta duración.
Y cuando se trata de propiedades para arriendo temporal, puedo aportar una mirada más completa, porque no solo entiendo cómo debe verse el espacio, sino también cómo debe funcionar, cómo se posiciona frente a la competencia y cómo impacta en la experiencia del huésped y en la rentabilidad.
No vendo decoración.
Diseño espacios con estrategia para generar mejores resultados.
```

### 4.6 Lead magnet
```text
¿Tu propiedad está lista para competir?
```

```text
Descarga una guía simple para revisar si tu propiedad está comunicando todo su valor antes de publicarla, venderla o invertir más en publicidad.
```

```text
En esta guía podrás identificar:
```

```text
Qué aspectos visuales pueden estar afectando la percepción de tu propiedad.
Qué errores hacen que un espacio se vea menos atractivo o menos rentable.
Qué decisiones de diseño pueden ayudarte a diferenciarte sin gastar de más.
Qué revisar antes de bajar el precio o invertir en nuevos canales de difusión.
```

```text
CTA: Descargar guía gratuita
```

### 4.7 Autoridad / quién soy
```text
Soy Loreto Mujica, diseñadora e interiorista.
Mi camino profesional comenzó en el diseño gráfico, donde desarrollé una fuerte sensibilidad estética y una mirada visual orientada a comunicar ideas con claridad. Más adelante trabajé en diseño, publicidad y marketing inmobiliario, colaborando durante años con empresas del sector.
Fue ahí donde entendí algo que sigue guiando mi trabajo hasta hoy: las personas no toman decisiones solo desde la lógica. También deciden desde la emoción, la percepción y la experiencia.
Con el tiempo, mi fascinación por los espacios se transformó en profesión. Después de años vinculada al interiorismo, encontré la unión perfecta entre mis dos grandes fortalezas: la sensibilidad estética y la visión comercial.
Hoy ayudo a inversionistas, propietarios e inmobiliarias a transformar espacios comunes o con bajo desempeño en propiedades con mayor atractivo, mejor percepción y más potencial comercial.
También lo viví personalmente. Al comprar un departamento en Lo Barnechea como inversión, confirmé algo clave: las personas muchas veces deciden antes de visitar un lugar, cuando lo ven en una pantalla. Por eso, una propiedad no solo debe existir en el mercado. Debe destacar.
```

### 4.8 Testimonios / casos de éxito

#### Caso 1
```text
Departamento de inversión preparado para destacar
```

```text
Una propiedad de 68 m² necesitaba verse amplia, funcional y deseable para competir mejor en el mercado. El trabajo se enfocó en potenciar su atractivo visual, ordenar la experiencia del espacio y lograr que el posible comprador o arrendatario pudiera proyectarse desde el primer vistazo.
Resultado: una propiedad más clara, más atractiva y mejor preparada para competir desde la percepción de valor.
```

#### Caso 2
```text
Propiedades que dejan de ser “una más”
```

```text
Cuando una propiedad se ve genérica, desordenada o poco conectada con su público, compite principalmente por precio. A través del interiorismo estratégico, se puede transformar su presentación, mejorar su posicionamiento y convertirla en una alternativa más deseable dentro de la oferta existente.
Resultado: espacios que comunican mejor su potencial y generan una conexión más rápida con compradores, arrendatarios o huéspedes.
```

#### Caso 3
```text
Arriendos de corta duración con mirada integral
```

```text
En propiedades destinadas a arriendos temporales, el diseño no puede pensarse solo para la foto. También debe considerar el uso, la operación, la experiencia del huésped y la competencia en plataformas digitales.
Resultado: espacios pensados para verse bien, funcionar bien y sostener una mejor experiencia de arriendo.
```

### 4.9 Llamada final a la acción
```text
Si tienes una propiedad que no está mostrando todo su potencial, no partamos bajando el precio.
Partamos revisando qué está comunicando tu espacio.
Tal vez necesita orden.
Tal vez necesita estrategia.
Tal vez necesita una mejor forma de mostrar su valor.
O tal vez necesita convertirse en una alternativa imposible de ignorar.
Conversemos.
Muéstrame tu propiedad y revisemos qué acciones podrían ayudarte a vender mejor, arrendar mejor o rentabilizar mejor tu inversión.
CTA principal: Agendar asesoría inicial
CTA secundario: Escribirme por WhatsApp
```

### 4.10 Contacto
```text
Tu propiedad puede dejar de ser una más.
```

```text
Si sientes que tu propiedad podría estar mostrando menos de lo que realmente vale, conversemos. Revisemos juntos qué cambios pueden ayudarte a vender mejor, arrendar mejor o rentabilizar mejor tu inversión.
```

```text
WHATSAPP
+56 9 4214 1975
```

```text
EMAIL
Mujicadeco@gmail.com
```

```text
INSTAGRAM
@walldeco_loretomujica
```

```text
Agenda una asesoría inicial
```

```text
NOMBRE
Tu nombre
```

```text
EMAIL
tucorreo@ejemplo.com
```

```text
TIPO DE PROPIEDAD
Selecciona una opción
```

```text
CUÉNTAME EL CONTEXTO
Ubicación, plazos, objetivo (venta, arriendo, puesta en valor)...
```

```text
SOLICITAR ASESORÍA
```

### 4.11 Tipos de propiedad
```text
PROPIEDADES:
1.- PROYECTO INMOBIALIARIO: PILOTO, AREAS COMUNES, SALAS DE VENTA
2.- INVERSIÓNISTA: casa o depto, arriendo de corta duración
3.- arriendos de corta duración + venta
4.- ARRIENDO CORTA DURACIÓN, SEGUNDA VIVIENDA
5.- OTRO
```

### 4.12 Información comercial de asesoría
```text
PONER 1,5 UF P/HORA, ASESORÍA PRESENCIAL EN STGO.
resto del país más extrangero: Asesoría Remota
(desarrollar esto!)
```

### 4.13 Mensaje predeterminado WhatsApp
```text
Hola, vi la página de MLM y me gustaría saber un poco más sobre cómo trabajan.
```

---

## 5. INSTRUCCIONES DIRECTAS PARA CLAUDE CODE / CODEX

Instrucción de Auditoría: Compara este documento con el repositorio de código actual. Si alguna estructura, orden de elementos, texto literal o regla obligatoria no se cumple en el código, realiza los cambios correspondientes de manera automática para lograr una conformidad del 100%.

Restricción adicional: no hagas cambios innecesarios si el repositorio ya cumple esta especificación. Corrige solo incumplimientos reales, errores funcionales, textos faltantes, orden incorrecto, rutas rotas, problemas responsive o diferencias obligatorias respecto a este documento.
