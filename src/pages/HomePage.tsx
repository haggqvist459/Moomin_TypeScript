import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateFilter, selectVisibleMugs } from "@/redux";
import { DEFAULT_OPTION, SEASON_OPTIONS, SERIES_OPTIONS, OWNED_OPTIONS } from "@/utils";
import { Dropdown, mapToDropdownOptions } from "@/components/ui/dropdown";
import MugListItem from "@/components/ui/MugListItem";


const HomePage = () => {

  const visibleMugs = useAppSelector(selectVisibleMugs);
  const filters = useAppSelector(state => state.appState.filters);

  const dispatch = useAppDispatch()

  const seasonDropdownOptions = mapToDropdownOptions({ ...DEFAULT_OPTION, ...Object.fromEntries(SEASON_OPTIONS.map(v => [v, v])) });
  const seriesDropdownOptions = mapToDropdownOptions({ ...DEFAULT_OPTION, ...Object.fromEntries(SERIES_OPTIONS.map(v => [v, v])) });
  const ownedOptions = mapToDropdownOptions(Object.fromEntries(OWNED_OPTIONS.map(v => [v, v])))


  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full bg-primary pb-5">
        <div className="mt-2 w-full md:w-2/3 flex px-5 space-x-2">
          <Dropdown
            id="seasonFilter"
            label="Seasonal"
            onChange={(e) => dispatch(updateFilter({ season: e.target.value }))}
            options={seasonDropdownOptions}
            value={filters.season}
          />
          <Dropdown
            id="seriesFilter"
            label="Series"
            onChange={(e) => dispatch(updateFilter({ series: e.target.value }))}
            options={seriesDropdownOptions}
            value={filters.series}
          />
          <Dropdown
            id="owned"
            label="Owned"
            onChange={(e) => dispatch(updateFilter({ owned: e.target.value }))}
            options={ownedOptions}
            value={filters.owned}
          />
        </div>
      </div>


      <div className="my-10 px-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 space-x-2">
        {visibleMugs.map(mug => (
          <MugListItem
            key={mug.number}
            name={mug.name}
            number={mug.number}
            slug={mug.slug}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;