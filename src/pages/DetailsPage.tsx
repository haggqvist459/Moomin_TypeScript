import { useParams } from "react-router-dom";
import { useAppSelector, selectMugByNumber } from "@/redux";
import { getMugImage } from "@/utils";
import { ToggleButton } from "@/components";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const mug = useAppSelector(selectMugByNumber(Number(id)));

  if (!mug) return <div>Mug not found</div>;

  return (
    <section className="mt-5 p-3 bg-white w-11/12 flex flex-col justify-center mx-auto shadow-md rounded-md">
      <img
        src={getMugImage(mug.slug)}
        alt={mug.name}
        className="h-auto object-contain"
      />
      <div>
        <div>
          <p className="font-medium text-2xl mt-2">
            <span className="font-bold">#{mug.number}</span> {mug.name}
          </p>
          <ToggleButton 
            isToggled={mug.owned}
            onToggle={() => {}}
          />
        </div>


        <p className="font-medium text-xl mt-1 text-zinc-700">
          {mug.year}
          {mug.series !== "-" && ` • ${mug.series}`}
          {mug.season !== "-" && ` • ${mug.season}`}
        </p>
        <p className="text-lg">
          {mug.description}
        </p>
        <p className="text-lg">
          {mug.notes}
        </p>
      </div>

    </section>
  );
};

export default DetailsPage;