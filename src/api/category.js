import axios from "axios";

const category = async (query, pageSize = 9) => {
  let response = await axios.get(
    `/${query}?show-fields=thumbnail,headline&page-size=${pageSize}`
  );
  return response.data.response.results;
};
const categoryPeginate = async (query, page) => {
  let response = await axios.get(
    `/${query}?show-fields=thumbnail,headline&page-size=9&page=${page}`
  );
  return response.data.response.results;
};

export { category, categoryPeginate };
