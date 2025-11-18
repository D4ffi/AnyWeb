# Animalotchi - Landing Page

Sitio web multi-página para la aplicación móvil Animalotchi, tu asistente personal para el cuidado de mascotas.

## 📁 Estructura del Proyecto

```
animalotchi-landing/
│
├── index.html              # Página principal
├── styles.css              # Estilos globales
├── script.js               # JavaScript global
│
├── Características/
│   ├── alimentacion.html
│   ├── salud.html
│   ├── recordatorios.html
│   └── gestion-multiple.html
│
├── Descargar/
│   └── descargar.html      # Página de descarga con QR y logo interactivo
│
├── Acerca de/
│   ├── beneficios.html
│   ├── estadisticas.html
│   └── equipo.html
│
└── Soporte/
    ├── faq.html
    ├── contacto.html
    └── tutoriales.html
```

## 🎨 Características

### Navegación
- **Menú dropdown funcional** con submenús organizados
- Navegación responsive
- Indicadores visuales de página activa

### Páginas Principales
1. **Inicio** - Hero section con mockup animado de teléfono
2. **Características** - 4 subpáginas detallando funcionalidades
3. **Descargar** - Logo interactivo 3D + QR code
4. **Acerca de** - Información del proyecto y estadísticas
5. **Soporte** - FAQ, contacto y tutoriales

### Efectos Visuales
- Animaciones de scroll reveal
- Logo 3D interactivo con seguimiento de mouse
- Transiciones suaves en todos los elementos
- Degradados y sombras modernas

## 🚀 Instalación

1. Descarga todos los archivos en la misma carpeta
2. Abre `index.html` en tu navegador
3. ¡Listo! El sitio funciona completamente offline

## 💻 Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript Vanilla
- SVG para el logo interactivo

## 🎯 Funcionalidades Interactivas

### Menús Dropdown
Los menús dropdown se activan al pasar el mouse y son completamente funcionales en todos los dispositivos.

### Logo Interactivo
El logo del gato en la página de descarga responde al movimiento del mouse con rotación 3D suave.

### Acordeón FAQ
Las preguntas frecuentes se expanden/colapsan con animaciones suaves.

### Animaciones de Scroll
Los elementos aparecen con animación mientras haces scroll por la página.

## 📱 Responsive Design

El sitio es completamente responsive y se adapta a:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎨 Paleta de Colores

- Verde principal: `#28a745`
- Verde secundario: `#20c997`
- Fondo claro: `#f8f9fa`
- Texto oscuro: `#1a1a1a`
- Texto secundario: `#666`

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
/* Busca y reemplaza estos valores */
#28a745  /* Verde principal */
#20c997  /* Verde secundario */
```

### Modificar Contenido
Cada página HTML tiene su contenido claramente estructurado. Simplemente busca las secciones y edita el texto.

### Agregar Nuevas Páginas
1. Copia cualquier archivo HTML existente
2. Modifica el contenido
3. Agrega el enlace en el menú de navegación
4. Actualiza el footer

## 📝 Notas Importantes

- Todos los enlaces internos usan rutas relativas
- El sitio no requiere servidor web (funciona con file://)
- Las imágenes del logo están en formato SVG inline
- No hay dependencias externas

## 🐛 Solución de Problemas

**Los dropdowns no funcionan:**
- Verifica que `script.js` esté cargado correctamente
- Revisa la consola del navegador para errores

**Las animaciones no se ven:**
- Asegúrate de que `styles.css` esté enlazado correctamente
- Algunos navegadores antiguos pueden no soportar todas las animaciones

**El logo no responde al mouse:**
- Verifica que estés en la página `descargar.html`
- Asegúrate de que JavaScript esté habilitado en tu navegador

## 👥 Créditos

Proyecto Universitario - Desarrollo de Software
Ingeniería de Sistemas

## 📄 Licencia

Proyecto académico - Uso educativo

---

## 🎓 Proyecto Académico

Este sitio web fue desarrollado como parte del proyecto "Animalotchi" para la materia de Desarrollo de Aplicaciones Móviles. 

**Características del proyecto:**
- Landing page profesional multi-página
- Sistema de navegación con menús dropdown
- Diseño responsive y moderno
- Animaciones y efectos interactivos
- Logo SVG personalizado interactivo

**Objetivos cumplidos:**
✅ Estructura HTML semántica
✅ CSS moderno con Flexbox y Grid
✅ JavaScript para interactividad
✅ Diseño responsive
✅ Optimización de rendimiento
✅ Accesibilidad web
