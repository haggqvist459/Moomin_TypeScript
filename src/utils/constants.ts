
export const ROUTES = {
    HOME: '/',
    ADMIN: '/admin',
    ABOUT: '/about',
    ERROR: '/*',
} as const

export const NAVBAR_OPTIONS = {
    HOME: {
        route: ROUTES.HOME,
        id: 1,
        text: 'Home'
    },
    ADMIN: {
        route: ROUTES.ADMIN,
        id: 4,
        text: 'Admin'
    },
    ABOUT: {
        route: ROUTES.ABOUT,
        id: 5,
        text: 'About'
    },
} as const