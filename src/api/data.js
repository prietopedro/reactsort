export const getData = () => {
  return fetch("http://localhost:3001/data").then((res) => res.json());
};
