import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:9
 * @route '/crear_cuenta'
 */
export const crear_cuenta = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: crear_cuenta.url(options),
    method: 'get',
})

crear_cuenta.definition = {
    methods: ["get","head"],
    url: '/crear_cuenta',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:9
 * @route '/crear_cuenta'
 */
crear_cuenta.url = (options?: RouteQueryOptions) => {
    return crear_cuenta.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:9
 * @route '/crear_cuenta'
 */
crear_cuenta.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: crear_cuenta.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:9
 * @route '/crear_cuenta'
 */
crear_cuenta.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: crear_cuenta.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:16
 * @route '/iniciar_sesion'
 */
export const iniciar_sesion = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: iniciar_sesion.url(options),
    method: 'get',
})

iniciar_sesion.definition = {
    methods: ["get","head"],
    url: '/iniciar_sesion',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:16
 * @route '/iniciar_sesion'
 */
iniciar_sesion.url = (options?: RouteQueryOptions) => {
    return iniciar_sesion.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:16
 * @route '/iniciar_sesion'
 */
iniciar_sesion.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: iniciar_sesion.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:16
 * @route '/iniciar_sesion'
 */
iniciar_sesion.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: iniciar_sesion.url(options),
    method: 'head',
})