import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'

/**
 * Appearance settings route (manual fallback)
 * This file was added to satisfy imports when Wayfinder did not generate a route.
 * Adjust the URL to match your actual backend route if needed.
 * @route '/settings/appearance'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get", "head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get", "head"]>

edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})
