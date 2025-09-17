import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadData, saveData, LOCALSTORAGE_KEYS } from "@/utils";
import { MugStateData } from "./types";
import { CatalogObject } from "@/types/catalog.types";
import rawCatalog from '@/assets/data/catalog_mugs.json';

const catalog: CatalogObject[] = rawCatalog.map(obj => ({
  ...obj,
  season: obj.season as CatalogObject["season"],
  series: obj.series as CatalogObject["series"],
}));

const initialState: MugStateData = loadData<MugStateData>(LOCALSTORAGE_KEYS.OWNED_MUGS) ?? {
  mugList: catalog,
  ownedList: [],
  filters: {
    season: '-',
    series: '-',
  }
}

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {}
})

export const { } = appSlice.actions
export default appSlice.reducer