/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CountriesImport } from './routes/countries'
import { Route as AboutUsImport } from './routes/about-us'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const CountriesRoute = CountriesImport.update({
  path: '/countries',
  getParentRoute: () => rootRoute,
} as any)

const AboutUsRoute = AboutUsImport.update({
  path: '/about-us',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about-us': {
      id: '/about-us'
      path: '/about-us'
      fullPath: '/about-us'
      preLoaderRoute: typeof AboutUsImport
      parentRoute: typeof rootRoute
    }
    '/countries': {
      id: '/countries'
      path: '/countries'
      fullPath: '/countries'
      preLoaderRoute: typeof CountriesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutUsRoute,
  CountriesRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about-us",
        "/countries"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about-us": {
      "filePath": "about-us.tsx"
    },
    "/countries": {
      "filePath": "countries.tsx"
    }
  }
}
ROUTE_MANIFEST_END */