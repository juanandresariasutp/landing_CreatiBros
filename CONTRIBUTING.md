# Guía de Contribución — Creatibros

> Este archivo define los estándares de desarrollo para el proyecto.  
> **Todo agente de IA y colaborador humano debe leer este archivo antes de hacer cualquier commit.**

---

## 📌 Convención de Commits

Este proyecto sigue **Conventional Commits** con mensajes **en español**.

### Formato

```
<tipo>(<alcance>): <descripción corta en imperativo>

[cuerpo opcional — explica el QUÉ y el POR QUÉ, no el cómo]

[footer opcional — referencias, breaking changes]
```

---

### Tipos permitidos

| Tipo       | Cuándo usarlo                                                  |
|------------|----------------------------------------------------------------|
| `feat`     | Nueva funcionalidad visible para el usuario                    |
| `fix`      | Corrección de un bug                                           |
| `docs`     | Cambios solo en documentación (README, CONTRIBUTING, etc.)     |
| `style`    | Formato, espaciado, punto y coma — sin cambio de lógica        |
| `refactor` | Reestructura de código sin agregar funciones ni corregir bugs  |
| `perf`     | Mejora de rendimiento                                          |
| `test`     | Agregar o corregir pruebas                                     |
| `chore`    | Tareas de mantenimiento (deps, config, build tools)            |
| `ci`       | Cambios en pipelines de CI/CD (Vercel, GitHub Actions)         |
| `revert`   | Revertir un commit anterior                                    |

---

### Alcances sugeridos (scope)

Usa el nombre del componente o sección afectada:

`hero` · `navbar` · `servicios` · `portafolio` · `contacto` · `quienes-somos` · `clientes` · `lightbox` · `cloudinary` · `whatsapp` · `seo` · `deps` · `config`

Si el cambio afecta múltiples áreas, omite el alcance.

---

### Reglas de escritura

- ✅ Usar **imperativo presente**: "agrega", "corrige", "elimina", "actualiza"
- ✅ Descripción corta: **máximo 72 caracteres** en la primera línea
- ✅ Sin punto final en la primera línea
- ✅ Cuerpo separado por una línea en blanco si se necesita explicación
- ❌ No usar pasado: ~~"agregué"~~, ~~"se corrigió"~~
- ❌ No usar mayúsculas al inicio del tipo o descripción salvo nombres propios
- ❌ No hacer commits gigantes — un commit = un cambio lógico

---

### Ejemplos correctos

```bash
# Funcionalidad nueva
feat(portafolio): agrega filtros por categoría con animación de transición

# Corrección de bug
fix(contacto): corrige codificación de caracteres especiales en mensaje de WhatsApp

# Cambio de estilos visuales
style(hero): ajusta espaciado del CTA en móvil

# Configuración o dependencias
chore(deps): actualiza next a v14.2.5

# Documentación
docs: agrega instrucciones de deploy en README

# Refactor sin cambio de comportamiento
refactor(cloudinary): extrae helper de construcción de URL a lib/cloudinary.ts

# Mejora de rendimiento
perf(portafolio): implementa lazy loading con Intersection Observer en galería

# Múltiples áreas (sin scope)
feat: implementa sección 'Quiénes Somos' con valores y foto del equipo

# Con cuerpo explicativo
fix(whatsapp): corrige número de teléfono en variable de entorno

El número estaba hardcodeado en el componente. Ahora se lee desde
NEXT_PUBLIC_WA_NUMBER para evitar exponer datos en el repositorio.

Closes #12
```

---

### Ejemplos incorrectos

```bash
# ❌ Demasiado vago
fix: correcciones

# ❌ En pasado
feat(hero): agregué el botón de contacto

# ❌ En inglés (este proyecto usa español)
feat(navbar): add mobile hamburger menu

# ❌ Commit gigante sin foco
feat: todo el sitio completo con estilos y componentes

# ❌ Con punto final
fix(seo): corrige meta description.
```

---

## 🌿 Estrategia de ramas

```
main          → producción (deploy automático a Vercel)
dev           → integración antes de pasar a main
feat/nombre   → nueva funcionalidad
fix/nombre    → corrección de bug
chore/nombre  → mantenimiento
```

**Flujo recomendado:**

```bash
# 1. Crear rama desde dev
git checkout dev
git checkout -b feat/portafolio-filtros

# 2. Trabajar y hacer commits atómicos
git add components/Portafolio.tsx
git commit -m "feat(portafolio): agrega filtros por categoría con estado en React"

# 3. Cuando esté listo, merge a dev
git checkout dev
git merge feat/portafolio-filtros

# 4. Cuando dev esté estable, merge a main (dispara deploy en Vercel)
git checkout main
git merge dev
```

---

## 🤖 Instrucciones para agentes de IA

Si eres un agente de IA (Claude Code, Cursor, Copilot, etc.) trabajando en este proyecto, **debes seguir estas reglas sin excepción**:

1. **Lee este archivo completo** antes de tu primera acción en cualquier sesión
2. **Nunca hagas un commit en inglés** — el idioma del proyecto es el español
3. **Un commit por cambio lógico** — no acumules cambios no relacionados en un solo commit
4. **Usa el tipo correcto** — si agregas una función nueva es `feat`, si corriges un bug es `fix`, no uses `chore` para todo
5. **Incluye el scope** cuando el cambio sea específico a un componente o sección
6. **Si corriges algo que rompiste tú mismo** en la misma sesión, corrige el código sin crear un commit de `fix` — simplemente enmienda el commit anterior con `git commit --amend`
7. **Antes de hacer push a `main`**, confirma que el build de Next.js pasa sin errores: `npm run build`
8. **No subas archivos sensibles**: `.env.local` nunca va al repositorio

### Checklist antes de cada commit (para agentes)

```
[ ] El tipo de commit es correcto según la tabla de tipos
[ ] El mensaje está en español e imperativo presente
[ ] El alcance (scope) refleja el componente o área afectada
[ ] El cambio es atómico (un solo propósito lógico)
[ ] No se incluyen archivos .env ni secretos
[ ] El código no tiene console.log de depuración
[ ] Si es feat o fix: el build de Next.js pasa (npm run build)
```

---

## 📁 Variables de entorno

Nunca hardcodear valores sensibles. Usar siempre variables de entorno:

```bash
# .env.local (NO subir al repo — está en .gitignore)
NEXT_PUBLIC_WA_NUMBER=57300XXXXXXX
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
```

En Vercel, estas variables se configuran en:  
**Dashboard → Tu proyecto → Settings → Environment Variables**

---

## 🚀 Comandos útiles de referencia

```bash
# Ver historial de commits en formato compacto
git log --oneline --graph

# Enmendar el último commit (sin crear uno nuevo)
git commit --amend -m "feat(hero): corrige mensaje del CTA"

# Deshacer el último commit pero conservar los cambios
git reset --soft HEAD~1

# Ver qué archivos cambiarán antes de hacer commit
git status
git diff
```
