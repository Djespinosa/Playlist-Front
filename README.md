# 🎵 Playlist-Front

Este proyecto es una aplicación frontend construida con **Angular 18**, **Tailwind CSS**, y **pnpm** como gestor de paquetes. Permite visualizar, crear y eliminar listas de reproducción musicales.

---

## ✅ Requisitos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js** `v20.19.1`
- **pnpm** `v10.10.0`
- **Angular CLI** `v18.2.19`

Puedes verificarlo ejecutando:

```bash
node -v
pnpm -v
ng version
```

---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Djespinosa/Playlist-Front.git
cd Playlist-Front
```

2. Instala las dependencias:

```bash
pnpm install
```

---

## 🖼️ TailwindCSS

TailwindCSS ya viene configurado. Si necesitas personalizar estilos globales, edita:

- `tailwind.config.ts`
- `src/styles.scss`

---

## 🧪 Servidor de desarrollo

Ejecuta la app con:

```bash
ng serve
```

Esto iniciará la aplicación en `http://localhost:4200/`.

---

## 🔗 API Backend

El frontend se conecta con un backend REST disponible en `http://localhost:8080`.  
Asegúrate de que el backend esté corriendo antes de crear o eliminar playlists.

---


## 📝 Notas

- Las notificaciones usan `Toasts` animados con Tailwind.
- El formulario para crear playlists incluye canciones dinámicamente.

---


### 🚀 Opción 2: Ejecutar con Docker

1. Construir la imagen:

   ```bash
   docker build -t playlist-frontend .


2. Ejecutar el contenedor
    ```bash
    docker run -p 4200:80 --name Playlist-app playlist-frontend


3. La aplicación estará disponible en http://localhost:4200



_Última actualización: 2025-05-24_
