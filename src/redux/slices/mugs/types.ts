import { CatalogObject, Season, Series } from "@/types/catalog.types"

export type MugStateData = {
  mugList: CatalogObject[]
  ownedList: number[],
  filters: { season: Season; series: Series }
}