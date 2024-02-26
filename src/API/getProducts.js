export const getProducts = ({ queryKey: [, selectedСategories, search] }) => {
  const category = selectedСategories ? `categoryId=${selectedСategories}` : "";
  const title = search ? `&title=${search}` : "";

  return fetch(`https://api.escuelajs.co/api/v1/products?${category}${title}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => alert("Error..."));
};
