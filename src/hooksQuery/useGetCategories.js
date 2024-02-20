import { useQuery } from "react-query";
import { getCategories } from "../API/getCategories";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
