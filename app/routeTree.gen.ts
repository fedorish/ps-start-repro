/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthedImport } from './routes/_authed'
import { Route as IndexImport } from './routes/index'
import { Route as AuthedCompetitionsImport } from './routes/_authed/competitions'
import { Route as AuthedCompetitionsCompetitionIdImport } from './routes/_authed/competitions.$competitionId'

// Create/Update Routes

const AuthedRoute = AuthedImport.update({
  id: '/_authed',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthedCompetitionsRoute = AuthedCompetitionsImport.update({
  path: '/competitions',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedCompetitionsCompetitionIdRoute =
  AuthedCompetitionsCompetitionIdImport.update({
    path: '/$competitionId',
    getParentRoute: () => AuthedCompetitionsRoute,
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
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    '/_authed/competitions': {
      id: '/_authed/competitions'
      path: '/competitions'
      fullPath: '/competitions'
      preLoaderRoute: typeof AuthedCompetitionsImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/competitions/$competitionId': {
      id: '/_authed/competitions/$competitionId'
      path: '/$competitionId'
      fullPath: '/competitions/$competitionId'
      preLoaderRoute: typeof AuthedCompetitionsCompetitionIdImport
      parentRoute: typeof AuthedCompetitionsImport
    }
  }
}

// Create and export the route tree

interface AuthedCompetitionsRouteChildren {
  AuthedCompetitionsCompetitionIdRoute: typeof AuthedCompetitionsCompetitionIdRoute
}

const AuthedCompetitionsRouteChildren: AuthedCompetitionsRouteChildren = {
  AuthedCompetitionsCompetitionIdRoute: AuthedCompetitionsCompetitionIdRoute,
}

const AuthedCompetitionsRouteWithChildren =
  AuthedCompetitionsRoute._addFileChildren(AuthedCompetitionsRouteChildren)

interface AuthedRouteChildren {
  AuthedCompetitionsRoute: typeof AuthedCompetitionsRouteWithChildren
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedCompetitionsRoute: AuthedCompetitionsRouteWithChildren,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthedRouteWithChildren
  '/competitions': typeof AuthedCompetitionsRouteWithChildren
  '/competitions/$competitionId': typeof AuthedCompetitionsCompetitionIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthedRouteWithChildren
  '/competitions': typeof AuthedCompetitionsRouteWithChildren
  '/competitions/$competitionId': typeof AuthedCompetitionsCompetitionIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/_authed/competitions': typeof AuthedCompetitionsRouteWithChildren
  '/_authed/competitions/$competitionId': typeof AuthedCompetitionsCompetitionIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/competitions' | '/competitions/$competitionId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/competitions' | '/competitions/$competitionId'
  id:
    | '__root__'
    | '/'
    | '/_authed'
    | '/_authed/competitions'
    | '/_authed/competitions/$competitionId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthedRoute: typeof AuthedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authed"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/competitions"
      ]
    },
    "/_authed/competitions": {
      "filePath": "_authed/competitions.tsx",
      "parent": "/_authed",
      "children": [
        "/_authed/competitions/$competitionId"
      ]
    },
    "/_authed/competitions/$competitionId": {
      "filePath": "_authed/competitions.$competitionId.tsx",
      "parent": "/_authed/competitions"
    }
  }
}
ROUTE_MANIFEST_END */
