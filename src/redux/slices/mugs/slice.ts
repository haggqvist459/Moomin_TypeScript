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
  ownedList: []
}

const mugSlice = createSlice({
  name: 'mugSlice',
  initialState,
  reducers: {}
})

export const { } = mugSlice.actions
export default mugSlice.reducer