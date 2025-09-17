import { SEASON_OPTIONS, SERIES_OPTIONS } from "@/utils";


export type Season = "-" | (typeof SEASON_OPTIONS)[number]
export type Series = "-" | (typeof SERIES_OPTIONS)[number]

export type CatalogObject = {
  slug: string,
  name: string,
  year: string,
  description: string, 
  notes: string, 
  number: number,
  season: Season,
  series: Series
}