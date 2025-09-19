import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/redux";

export const selectVisibleMugs = createSelector(
  [
    (state: RootState) => state.appState.mugList,
    (state: RootState) => state.appState.filters,
    (state: RootState) => state.appState.ownedList,
  ],
  (mugList, { season, series, owned }, ownedList) => {
    let visibleMugs = mugList;

    if (season && season !== "-") {
      visibleMugs = visibleMugs.filter(mug => mug.season === season);
    } else if (series && series !== "-") {
      visibleMugs = visibleMugs.filter(mug => mug.series === series);
    }

    if (owned === "Owned") {
      visibleMugs = visibleMugs.filter(mug => ownedList.includes(mug.number));
    }
    return visibleMugs;
  }
);

export const selectMugByNumber = (mugNumber: number) =>
  createSelector(
    (state: RootState) => ({
      mugList: state.appState.mugList,
      ownedList: state.appState.ownedList,
    }),
    ({ mugList, ownedList }) => {
      const mug = mugList.find((m) => m.number === mugNumber);
      if (!mug) return undefined;
      return { ...mug, owned: ownedList.includes(mug.number) };
    }
  );