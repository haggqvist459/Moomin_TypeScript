import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadData, saveData, LOCALSTORAGE_KEYS } from "@/utils";
import type { MugStateData, Filters, FilterPayload } from "./types";
import type { CatalogObject } from "@/types/catalog.types";
import rawCatalog from '@/assets/data/catalog_mugs.json';

const catalog: CatalogObject[] = (rawCatalog as CatalogObject[]).map(obj => ({
  ...obj,
  season: obj.season as CatalogObject["season"],
  series: obj.series as CatalogObject["series"],
}));

const initialState: MugStateData = {
  mugList: catalog,
  ownedList: [],
  filters: {
    season: '-',
    series: '-',
    owned: "All"
  }
}

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<FilterPayload>) => {
      const [key, value] = Object.entries(action.payload)[0] as [keyof Filters, string];

      switch (key) {
        case "season":
          state.filters.season = value as Filters["season"];
          break;
        case "series":
          state.filters.series = value as Filters["series"];
          break;
        case "owned":
          state.filters.owned = value as Filters["owned"];
          break;
        default:
          console.warn("Invalid filter key:", key);
      }
    },
    clearFilters: (state) => {
      state.filters = { season: "-", series: "-", owned: "All" }
    },
    saveMugToOwned: (state, action: PayloadAction<number>) => {
      if (!state.ownedList.includes(action.payload)) {
        state.ownedList.push(action.payload);
      }
    },
    clearOwnedMugs: (state) => {
      state.ownedList = []
    }
  }
})

export const { updateFilter, clearFilters, saveMugToOwned, clearOwnedMugs } = appSlice.actions

export default appSlice.reducer;
