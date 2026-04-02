# Roadmap de Proyecto Admin ORCIC (Stitch Inspired)

Este documento detalla la hoja de ruta para la modernización del panel administrativo de ORCIC, manteniendo la estética "Architectural Curated Space".

## 🚀 Fase 1: Localización e Inventario (Completado)
- [x] Migración de rutas a español (`/admin/propiedades`, `/admin/desarrollos`, etc.).
- [x] Rediseño editorial de tablas y formularios (Alta densidad Stich).
- [x] Localización 100% de etiquetas y componentes UI.
- [x] Lógica de filtrado y búsqueda en tiempo real para Propiedades.

## 🎨 Fase 2: Visualización y Portada (Próximamente - Oculto)
- [ ] **Activación de Diseño Bento:** Habilitar el gestor visual de cuadrículas para el Home Page.
- [ ] **Edición de Bloques Ethos:** Sistema de edición enriquecida para el manifiesto de marca.
- [ ] **Previsualización en tiempo real:** Ver cambios de diseño antes de publicar a la web principal.

## ⚙️ Fase 3: Persistencia y Backend (En Curso)
- [ ] Conexión de formularios con la API de `orcic.mx`.
- [ ] Sistema de notificaciones (Toasts) tras guardar cambios.
- [ ] Autenticación y roles de usuario.

---
*Nota: La funcionalidad del Diseño Bento ya está desarrollada en `src/pages/admin/desarrollos/diseno.astro` pero permanece oculta de la navegación principal por decisión de UX.*
