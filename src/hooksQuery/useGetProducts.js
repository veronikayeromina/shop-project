import { useQuery } from "react-query";
import { getProducts } from "../API/getProducts";

export const useGetProducts = (selectedСategories, search) => {
  return useQuery({
    queryKey: ["products", selectedСategories, search],
    queryFn: getProducts,
  });
};
