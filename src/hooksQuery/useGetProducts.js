import { useQuery } from "react-query";
import { getProducts } from "../API/getProducts";

export const useGetProducts = (selectedСategories) => {
  return useQuery({
    queryKey: ["products", selectedСategories],
    queryFn: getProducts,
  });
};
