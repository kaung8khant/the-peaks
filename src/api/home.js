import axios from "axios";

const home = async (orderBy) => {
  let response = null;
  if (orderBy) {
    response = await axios.get(
      `/search?page-size=8&show-fields=all&order-by=${orderBy}`
    );
  } else {
    response = await axios.get(`/search?page-size=8&show-fields=all`);
  }
  return response.data.response.results;
};

export { home };
