import { useAppDispatch, useAppSelector } from "@/redux/";
import { DEFAULT_OPTION, SEASON_OPTIONS, SERIES_OPTIONS } from "@/utils";
import { Dropdown, mapToDropdownOptions } from "@/components/ui/dropdown";

const HomePage = () => {

  const mugList = useAppSelector(state => state.appState.mugList);
  const ownedMugs = useAppSelector(state => state.appState.ownedMugs);
  // const filters = useAppSelector(state => state.appState.filters);
  const seasonDropdownOptions = mapToDropdownOptions({ ...DEFAULT_OPTION, ...Object.fromEntries(SEASON_OPTIONS.map(v => [v, v])) });
  const seriesDropdownOptions = mapToDropdownOptions({ ...DEFAULT_OPTION, ...Object.fromEntries(SERIES_OPTIONS.map(v => [v, v])) });



  return (
    <section className="w-full px-2 flex justify-center">
      <div className="w-1/2 flex px-2 space-x-2">
        <Dropdown
          id="seasonFilter"
          label="Seasonal Mugs"
          onChange={() => { }}
          options={seasonDropdownOptions}
          value={""}
        />
        <Dropdown
          id="seriesFilter"
          label="Series Mugs"
          onChange={() => { }}
          options={seriesDropdownOptions}
          value={""}
        />
      </div>
      <div className="">
        {/* list section */}
      </div>
    </section>
  );
}

export default HomePage;