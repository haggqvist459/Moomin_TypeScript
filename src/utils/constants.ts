
export const ROUTES = {
  HOME: '/',
  DETAILS: '/details/:id',
  DETAILS_PAGE: '/details/',
  ADMIN: '/admin',
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
} as const

export const LOCALSTORAGE_KEYS = {
  OWNED_LIST: 'ownedList'
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


export const PATHS = {
  IMAGE_PATH: "../assets/mugs"
} as const;