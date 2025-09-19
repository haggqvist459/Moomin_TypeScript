import type { CatalogObject, Season, Series, Owned } from "@/types/catalog.types"

export type FilterPayload =
  | { season: string }
  | { series: string }
  | { owned: string };

export type Filters = { 
  season: Season,
  series: Series,
  owned: Owned
}

export type MugStateData = {
  mugList: CatalogObject[]
  ownedList: number[],
  filters: Filters
}
