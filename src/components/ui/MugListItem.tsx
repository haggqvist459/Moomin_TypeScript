import { Link } from "react-router-dom";
import type { CatalogObject } from "@/types";
import { getMugImage, ROUTES } from "@/utils";

type MugListItemProps = Pick<CatalogObject, "slug" | "name" | "number">;

const MugListItem = ({ slug, number, name }: MugListItemProps) => {
  return (
    <Link to={ROUTES.DETAILS_PAGE + number} className="contents">
      <div className="grid grid-rows-[auto_1fr_auto] w-full max-w-sm h-full bg-white shadow-md rounded-md px-3 py-2">
        {/* Row 1: header */}
        <div className="row-start-1 row-end-2">
          <p className="font-medium text-lg">
            <span className="font-bold">#{number}</span> {name}
          </p>
        </div>

        {/* Row 2: filler (flex row to absorb differences) */}
        <div className="row-start-2 row-end-3" />

        {/* Row 3: image */}
        <div className="row-start-3 row-end-4 mt-2 mb-2">
          <img
            src={getMugImage(slug)}
            alt={name}
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      </div>
    </Link>
  );
};

export default MugListItem;