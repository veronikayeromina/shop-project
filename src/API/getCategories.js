export const getCategories = () => {
  return fetch(`https://api.escuelajs.co/api/v1/categories`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => alert("Error..."));
};
