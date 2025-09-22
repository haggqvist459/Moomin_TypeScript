import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadData, LOCALSTORAGE_KEYS } from "@/utils";
import type { MugStateData, Filters, FilterPayload } from "./types";
import type { CatalogObject } from "@/types";
import rawCatalog from '@/assets/data/catalog_mugs.json';

const catalog: CatalogObject[] = (rawCatalog as CatalogObject[]).map(obj => ({
  ...obj,
  season: obj.season as CatalogObject["season"],
  series: obj.series as CatalogObject["series"],
}));

const initialState: MugStateData = {
  mugList: catalog,
  ownedList: loadData<number[]>(LOCALSTORAGE_KEYS.OWNED_LIST) ?? [],
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
          state.filters.series = "-"
          break;
        case "series":
          state.filters.series = value as Filters["series"];
          state.filters.season = "-"
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
    toggleOwned: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.ownedList.indexOf(id);

      if (index === -1) {
        state.ownedList.push(id);
      } else {
        state.ownedList.splice(index, 1);
      }
    },
    clearOwnedMugs: (state) => {
      state.ownedList = []
    }
  }
})

export const { updateFilter, clearFilters, toggleOwned, clearOwnedMugs } = appSlice.actions

export default appSlice.reducer;
