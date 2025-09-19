import { useParams } from "react-router-dom";
import { useAppSelector } from "@/redux";
import { selectMugByNumber } from "@/redux/slices/mugs/selectors";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const mug = useAppSelector(selectMugByNumber(Number(id)));

  if (!mug) return <div>Mug not found</div>;

  return (
    <div>
      <h1>{mug.name}</h1>
      <p>#{mug.number}</p>
    </div>
  );
};

export default DetailsPage;