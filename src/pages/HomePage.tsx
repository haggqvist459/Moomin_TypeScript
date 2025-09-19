import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateFilter } from "@/redux";
import { DEFAULT_OPTION, SEASON_OPTIONS, SERIES_OPTIONS, OWNED_OPTIONS } from "@/utils";
import { Dropdown, mapToDropdownOptions, type DropdownOption } from "@/components/ui/dropdown";


const HomePage = () => {

  const mugList = useAppSelector(state => state.appState.mugList);
  const ownedMugs = useAppSelector(state => state.appState.ownedList);
  const filters = useAppSelector(state => state.appState.filters);

  const dispatch = useAppDispatch()

  const seasonDropdownOptions = mapToDropdownOptions({ ...DEFAULT_OPTION, ...Object.fromEntries(SEASON_OPTIONS.map(v => [v, v])) });
  const seriesDropdownOptions = mapToDropdownOptions({ ...DEFAULT_OPTION, ...Object.fromEntries(SERIES_OPTIONS.map(v => [v, v])) });
  const ownedOptions = mapToDropdownOptions(Object.fromEntries(OWNED_OPTIONS.map(v => [v, v])))


  return (
    <section className="w-full px-2 flex justify-center">
      <div className="w-2/3 flex px-2 space-x-2">
        <Dropdown
          id="seasonFilter"
          label="Seasonal Mugs"
          onChange={(e) => dispatch(updateFilter({ season: e.target.value }))}
          options={seasonDropdownOptions}
          value={filters.season}
        />
        <Dropdown
          id="seriesFilter"
          label="Series Mugs"
          onChange={(e) => dispatch(updateFilter({ series: e.target.value }))}
          options={seriesDropdownOptions}
          value={filters.series}
        />
        <Dropdown
          id="owned"
          label="Owned mugs"
          onChange={(e) => dispatch(updateFilter({ owned: e.target.value }))}
          options={ownedOptions}
          value={filters.owned}
        />
      </div>
      <div className="">
        {/* list section */}
      </div>
    </section>
  );
}

export default HomePage;