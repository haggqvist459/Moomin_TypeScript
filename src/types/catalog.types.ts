
type Season = "-" | "Summer" | "Winter"
type Series = "-" | "Anniversary" | "Moomin's Day" | "Christmas" | "Millenium" | "Moominvalley"

export type CatalogObject = {
  slug: string,
  name: string,
  year: string,
  description: string, 
  notes: string, 
  number:  number,
  season: Season,
  series: Series
}