# ROUTES — mapeo completo

Este documento lista las rutas conocidas en el proyecto, el handler (closure o controlador), el nombre del componente Inertia que se renderiza y la ubicación del archivo React en el repositorio.

Formato: Ruta -> Handler -> Componente Inertia -> Archivo en disco

## Rutas principales (web)

- GET /  -> `routes/web.php` (closure) -> `welcome` -> `resources/js/pages/welcome.tsx`
- GET /dashboard  -> `routes/web.php` (closure, middleware auth) -> `dashboard` -> `resources/js/pages/dashboard.tsx`

## Settings

- GET /settings/profile  -> `App\Http\Controllers\Settings\ProfileController@edit` -> `settings/profile` -> `resources/js/pages/settings/profile.tsx`
- PATCH /settings/profile -> `ProfileController@update` -> action (server) -> N/A
- DELETE /settings/profile -> `ProfileController@destroy` -> action (server) -> N/A
- GET /settings/password -> `App\Http\Controllers\Settings\PasswordController@edit` -> `settings/password` -> `resources/js/pages/settings/password.tsx`
- PUT /settings/password -> `PasswordController@update` -> action (server) -> N/A
- GET /settings/appearance -> `routes/settings.php` (closure) -> `settings/appearance` -> `resources/js/pages/settings/appearance.tsx`
- GET /settings/two-factor -> `App\Http\Controllers\Settings\TwoFactorAuthenticationController@show` -> `settings/two-factor` -> `resources/js/pages/settings/two-factor.tsx`

## Auth (Fortify) — definidas en `app/Providers/FortifyServiceProvider.php`

- Login view -> `auth/login` -> `resources/js/pages/auth/login.tsx`
- Register view -> `auth/register` -> `resources/js/pages/auth/register.tsx`
- Forgot password -> `auth/forgot-password` -> `resources/js/pages/auth/forgot-password.tsx`
- Reset password -> `auth/reset-password` -> `resources/js/pages/auth/reset-password.tsx`
- Verify email -> `auth/verify-email` -> `resources/js/pages/auth/verify-email.tsx`
- Two factor challenge -> `auth/two-factor-challenge` -> `resources/js/pages/auth/two-factor-challenge.tsx`
- Confirm password -> `auth/confirm-password` -> `resources/js/pages/auth/confirm-password.tsx`

## Donde buscar otros handlers

- `routes/web.php`, `routes/settings.php` — rutas del sitio principal.
- `app/Providers/FortifyServiceProvider.php` — configura las vistas Inertia para Fortify.
- `app/Http/Controllers/*` — controladores que devuelven `Inertia::render(...)`.

## Cómo probar SSR (dev:ssr)

1. Asegúrate de tener dependencias instaladas: `composer install` y `npm install`.
2. El archivo `vite.config.ts` ya referencia `ssr: 'resources/js/ssr.tsx'`.
3. Ejecuta `composer run dev:ssr` para levantar los procesos (servidor Laravel, cola, pail, y SSR). Si hay errores en la consola, copia la salida y los arreglamos.

Nota: se añadió `resources/js/ssr.tsx` como entrada mínima de SSR. Dependiendo del uso específico de hooks/context providers en tu app, puede que necesites envolver el `App` con providers adicionales en el `setup` del archivo SSR.
