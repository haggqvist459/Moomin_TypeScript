import { useParams } from "react-router-dom";
import { useAppSelector, selectMugByNumber, toggleOwned, useAppDispatch } from "@/redux";
import { getMugImage } from "@/utils";
import { ToggleButton } from "@/components";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const mugData = useAppSelector(selectMugByNumber(Number(id)));
  const dispatch = useAppDispatch();

  if (!mugData) return (
    <section className="mt-5 px-4 bg-white w-11/12 flex flex-col justify-center mx-auto shadow-md rounded-md">
      <div className="mt-2">
        <h1 className="text-xl md:text-2xl">
          Mug not found
        </h1>
      </div>
    </section>
  );

  const { mug, isOwned } = mugData;

  return (
    <section className="mt-5 px-4 bg-white w-11/12 flex flex-col justify-center mx-auto shadow-md rounded-md">
      <div className="mt-2">
        <img
          src={getMugImage(mug.slug)}
          alt={mug.name}
          className="h-auto object-contain"
        />
      </div>
      <div className="mt-2">
        <div className="grid grid-cols-[1fr_auto] gap-x-2">
          {/* Left column */}
          <div>
            <p className="font-medium text-xl md:text-2xl">
              <span className="font-bold">#{mug.number}</span> {mug.name}
            </p>
            <p className="font-medium text-lg md:text-xl text-neutral-600">
              {mug.year}
              {mug.series !== "-" && ` • ${mug.series}`}
              {mug.season !== "-" && ` • ${mug.season}`}
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start">
            <p className="font-medium text-xl md:text-2xl">Owned</p>
            <ToggleButton
              isToggled={isOwned}
              onToggle={() => dispatch(toggleOwned(mug.number))}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="my-2">
          <h5 className="text-xl md:text-2xl font-medium">About the mug:</h5>
          <p className="text-lg">
            {mug.description}
          </p>
          <p className="text-lg">
            {mug.notes}
          </p>
        </div>
      </div>

    </section>
  );
};

export default DetailsPage;

/*

        <div className="px-3">
          <div className="flex items-center justify-between">

            <p className="font-medium text-2xl mt-2">
              Owned
            </p>

          </div>
          <div className="flex items-center justify-between">

            <ToggleButton
              isToggled={isOwned}
              onToggle={() => { }}
            />
          </div>
        </div>

*/


/*

        <div className="flex justify-between px-3">
          <div className="flex flex-col justify-between">
            <p className="font-medium text-2xl">
              <span className="font-bold">#{mug.number}</span> {mug.name}
            </p>
            <p className="font-medium text-xl text-zinc-700">
              {mug.year}
              {mug.series !== "-" && ` • ${mug.series}`}
              {mug.season !== "-" && ` • ${mug.season}`}
            </p>
          </div>
          <div className="flex flex-col items-start justify-between">
            <p className="font-medium text-2xl">Owned</p>
            <div className="flex items-center">
              <ToggleButton
                isToggled={isOwned}
                onToggle={() => { }}
              />
            </div>
          </div>
        </div>

*/