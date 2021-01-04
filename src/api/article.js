import axios from "axios";

const article = async (query) => {
  let response = await axios.get(`/${query}?show-fields=all`);
  return response.data.response.content;
};

export { article };
