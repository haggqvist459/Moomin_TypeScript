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
    (state: RootState) => state.appState.mugList,
    (mugList) => mugList.find((mug) => mug.number === mugNumber)
  );