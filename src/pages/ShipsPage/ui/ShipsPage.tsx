import { useState } from "react";
import Pagination from "../../../shared/Pagination/Pagination";
import ShipsFiltersForm from "../../../widgets/ShipsFilterForm/ui/ShipsFiltersForm";
import ShipCard from "../../../entities/ShipCard/ShipCard";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";
import Loader from "../../../shared/Loader/Loader";
import { useGetShips } from "../api/useGetShips";
import { Ship } from "../model/actionTypes";

export const ShipsPage: React.FC = () => {
  const { loading, data } = useGetShips();

  const { ships } = useTypedSelector((state) => state.ships);

  const [currentPage, setCurrentPage] = useState(1);

  const shipsPerPage = 20;

  const indexOfLastShip = currentPage * shipsPerPage;
  const indexOfFirstShip = indexOfLastShip - shipsPerPage;
  const currentShips = ships?.slice(indexOfFirstShip, indexOfLastShip);

  return (
    <main className="ships-page">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ShipsFiltersForm
            setCurrentPage={setCurrentPage}
            shipsData={data?.vehicles}
          />
          {currentShips?.map((ship: Ship) => (
            <ShipCard ship={ship} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(ships?.length / shipsPerPage)}
            onPageChange={(pageNumber: number) => setCurrentPage(pageNumber)}
          />
        </>
      )}
    </main>
  );
};
