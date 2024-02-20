export const getProducts = ({ queryKey: [, selectedСategories] }) => {
  const category = selectedСategories ? `categoryId=${selectedСategories}` : "";

  return fetch(`https://api.escuelajs.co/api/v1/products?${category}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => alert("Error..."));
};
