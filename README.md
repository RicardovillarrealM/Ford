# Ford — Guía de desarrollo local

Resumen rápido

- Este proyecto usa Laravel (PHP) con Inertia + React como frontend.
- En desarrollo se ejecutan dos procesos principales:
  - Laravel (php artisan serve) sirve las rutas y el layout Blade (`resources/views/app.blade.php`).
  - Vite sirve los bundles JS/CSS y HMR (Hot Module Replacement).

Arrancar el entorno (rápido)

Usando los scripts del repo (recomendado):

```bash
# instalar dependencias PHP y JS (si no está hecho)
composer install
npm install

# copiar .env si hace falta y generar llave
cp .env.example .env
php artisan key:generate

# iniciar los procesos en desarrollo (arranca servidor Laravel, queue listener y Vite)
composer run dev
```

Arranque manual (si prefieres control):

```bash
# Terminal 1: servidor Laravel
php artisan serve    # por defecto: http://127.0.0.1:8000

# Terminal 2: Vite (HMR)
npm run dev          # por defecto: http://localhost:5173
```

Dónde editar y ver cambios

- Blade/layout principal: `resources/views/app.blade.php` — editas aquí para cambiar HTML base, meta tags y enlazado de @vite y @inertia. Sirve desde Laravel (127.0.0.1:8000).
- Páginas React (Inertia): `resources/js/pages/...` — edita `.tsx` aquí; Vite hace HMR y los cambios suelen verse inmediatamente en el navegador.
- Bootstrap JS: `resources/js/app.tsx` — inicializa Inertia y el resolver de páginas.
- Controladores/Requests: `app/Http/Controllers/...` y `app/Http/Requests/...` — lógica del servidor; al editar, recarga la página en el navegador.
- Estilos: `resources/css/app.css` (Tailwind) — editas y Vite/compilación recarga.

Hosts en desarrollo

- Laravel: http://127.0.0.1:8000 (por defecto cuando usas `php artisan serve` o `composer run dev`).
- Vite: http://localhost:5173 (sirve los assets JS/CSS y HMR).

Nota sobre SSR

- `vite.config.ts` referencia `ssr: 'resources/js/ssr.tsx'`, pero en este repo no existe `resources/js/ssr.tsx`. Por tanto, SSR no está activo. Si necesitas SSR, crea ese archivo y sigue la configuración adicional (`composer run dev:ssr`).

Mapa de rutas (tabla) — Route -> Handler -> Inertia component -> Archivo

| Ruta (HTTP) | Handler (archivo/closure) | Inertia component (name) | Archivo React (disk) | Host |
|---|---:|---|---|---|
| GET / | `routes/web.php` closure | `welcome` | `resources/js/pages/welcome.tsx` | Laravel (HTML) + Vite (assets) |
| GET /dashboard | `routes/web.php` closure (middleware auth) | `dashboard` | `resources/js/pages/dashboard.tsx` | Laravel + Vite |
| GET /settings/profile | `App\Http\Controllers\Settings\ProfileController@edit` | `settings/profile` | `resources/js/pages/settings/profile.tsx` | Laravel + Vite |
| PATCH /settings/profile | `ProfileController@update` (action) | (redirect/back) | N/A | Laravel |
| DELETE /settings/profile | `ProfileController@destroy` | (redirect) | N/A | Laravel |
| GET /settings/password | `App\Http\Controllers\Settings\PasswordController@edit` | `settings/password` | `resources/js/pages/settings/password.tsx` | Laravel + Vite |
| PUT /settings/password | `PasswordController@update` | (action) | N/A | Laravel |
| GET /settings/appearance | `routes/settings.php` closure | `settings/appearance` | `resources/js/pages/settings/appearance.tsx` | Laravel + Vite |
| GET /settings/two-factor | `App\Http\Controllers\Settings\TwoFactorAuthenticationController@show` | `settings/two-factor` | `resources/js/pages/settings/two-factor.tsx` | Laravel + Vite |

Fortify (auth) views — vinculadas en `app/Providers/FortifyServiceProvider.php`

| Ruta (GET / common) | Inertia component | Archivo React |
|---|---|---|
| /login | `auth/login` | `resources/js/pages/auth/login.tsx` |
| /register | `auth/register` | `resources/js/pages/auth/register.tsx` |
| /forgot-password | `auth/forgot-password` | `resources/js/pages/auth/forgot-password.tsx` |
| /reset-password/{token} | `auth/reset-password` | `resources/js/pages/auth/reset-password.tsx` |
| /verify-email | `auth/verify-email` | `resources/js/pages/auth/verify-email.tsx` |
| /two-factor-challenge | `auth/two-factor-challenge` | `resources/js/pages/auth/two-factor-challenge.tsx` |
| /confirm-password | `auth/confirm-password` | `resources/js/pages/auth/confirm-password.tsx` |

Notas prácticas

- Para añadir una nueva página Inertia:
  1. Crea `resources/js/pages/YourName.tsx`.
  2. En Laravel devuelve `Inertia::render('YourName', $props)` desde ruta o controlador.
  3. Vite/Inertia resolverá y cargará el componente.

- Si HMR no actualiza React, confirma que `npm run dev` (Vite) corre sin errores y que `app.blade.php` incluye `@vite` y `@viteReactRefresh`.

- Si modificas archivos en `app/Providers`, `bootstrap/` o `routes/` y ves comportamiento extraño, limpia cachés:

```bash
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear
```

¿Quieres que agregue además un diagrama visual (SVG) o un archivo `docs/ROUTES.md` con una tabla exportada a CSV? Puedo generarlo si lo deseas.
