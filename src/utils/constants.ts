
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

export const LOCALSTORAGE_KEYS = {
  OWNED_MUGS: 'owned_mugs'
} as const

export const DEFAULT_OPTION = {
  'All': '-'
} as const

export const OWNED_OPTIONS = [
  "All",
  "Owned"
] as const

export const SEASON_OPTIONS = [
  "Summer",
  "Winter",
] as const;

export const SERIES_OPTIONS = [
  "Christmas",
  "Millenium",
  "Anniversary",
  "Håll Sverige Rent",
  "Moomin's Day",
  "Moominvalley Park",
  "Moominvalley TV show",
  "Red Cross Charity",
] as const;