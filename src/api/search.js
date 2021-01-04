import axios from "axios";

const search = async (query) => {
  let response = await axios.get(
    `/search?q=${query}&page-size=8&show-fields=thumbnail,headline`
  );
  return response.data.response.results;
};

export { search };
