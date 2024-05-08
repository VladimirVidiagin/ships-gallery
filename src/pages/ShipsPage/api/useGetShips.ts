import { useQuery } from "@apollo/client";
import { ALL_SHIPS } from "../../../shared/apollo/ships";

export const useGetShips = () => {
  const { loading, error, data } = useQuery(ALL_SHIPS);

  if (loading) return { loading: true, error: null, data: [] };
  if (error) return { loading: false, error, data: [] };

  return { loading: false, error: null, data };
};
