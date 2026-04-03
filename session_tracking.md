# Bitácora de Proyecto - Real Estate

## Estado Actual: Estable y Optimizado

### 1. Problemas Resueltos
- **Error de Subida (tmpfile)**: Se parchó el archivo `vendor/livewire/livewire/src/TemporaryUploadedFile.php` para evitar el uso de `tmpfile()`, que estaba bloqueado en el hosting por seguridad. Ahora usa un directorio local en `storage/app/livewire-tmp/`.
- **Saturación de Espacio**:## Sesión 2 Abril 2026

### 🚀 Logros Técnicos
*   **Optimización de Activos:** Imagen Hero convertida a WebP (176KB). Reducción del 92%.
*   **Arquitectura "Single Source of Truth":**
    *   Creación de `src/data/homeData.json` para centralizar Hero, Stats y Ethos.
    *   Puente establecido: Home (`index.astro`) y Admin (`admin/contenido/index.astro`) sincronizados al 100%.
*   **Performance:** Eliminación de bucles infinitos en scroll (Redesign de `About.astro` para evitar Text Mutation Reflows).

### 🚨 Bloqueadores Pendientes
*   **BUG:** Doble petición de `logo_orcic.png` al inicio. A pesar de `loading="lazy"` en el footer, el arranque sigue disparando dos fetches.
*   **Hipótesis:** Script `perf.js` o referencias en Layout forzando descarga redundante.
 de Imágenes**: Se optimizaron las imágenes de `public/home/img/imgs/`, reduciendo archivos de 16MB a ~600KB (ahorro de más del 95% de ancho de banda).
- **Sistema de Placeholders**: Se creó un placeholder SVG universal en `public/storage/placeholder.svg`. Las vistas de Home y Propiedades ahora son robustas ante la falta de imágenes.
- **Limpieza de UI**: Se eliminó el enlace al video de 211MB (borrado previamente) para evitar errores 404 en el Home.
- **Consistencia de Almacenamiento**: Se corrigieron las rutas de guardado en los módulos administrativos (Blog ahora guarda en `/blog`, HomeImages en `/home-images`, y Locations en `/locations`) para evitar la mezcla de archivos con Propiedades.
- **Corrección de Localidades (Admin)**: Se solucionó el error `Undefined variable $registers` en la administración de localidades eliminando código de tabla duplicado e incorrecto en la vista del servidor, dejando que el componente Livewire gestione correctamente los datos.

### 2. Archivos Críticos para Subir al Servidor
Se mantienen los de la sesión anterior, mas estas nuevas adiciones:
1. `public/storage/placeholder.svg` (Nuevo)
2. `resources/views/livewire/home/index.blade.php` (Protección contra nulos)
3. `resources/views/livewire/properties/view.blade.php` (Protección contra nulos)
4. `app/Http/Livewire/Blog/Create.php` y `Edit.php` (Rutas corregidas)
5. `app/Http/Livewire/Administration/HomeImages.php` (Rutas corregidas)
6. Toda la carpeta `public/home/img/imgs/` (Optimización de peso)

### 3. Notas Técnicas
- El Home ahora verifica si `$this->homes` está vacío antes de renderizar el slider para prevenir crasheos de Laravel.
- Se corrigió un error visual en el- **Gestor Home Integral:** El panel de `Identidad Ethos` ahora controla dinámicamente:
    *   **Hero Portada:** Título, Subtítulo y Video/Imagen de fondo de la web.
    *   **Filosofía Ethos:** El manifiesto editorial con previsualización asimétrica.
    *   **Métricas de Impacto:** Edición de estadísticas (Trayectoria, Proyectos, etc.) con tipografía premium.
- **Diseño Stich (Curated Space):** Transformados los listados en tablas arquitectónicas de alta densidad con bordes delgados y estética premium.

### Registro de Versiones (Commits Modern)
- **ID:** `modern-02b`
- **Mensaje:** `feat: gestor home integral (hero, ethos, stats) y localización completa`
- **Fecha:** 2026-04-02
