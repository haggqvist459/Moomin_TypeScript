import type { CatalogObject, Season, Series } from "@/types/catalog.types"

export type Filters = { 
  season: Season,
  series: Series
}

export type MugStateData = {
  mugList: CatalogObject[]
  ownedList: number[],
  filters: Filters
}
