const string_excerpt = (string, max = 40) => {
  let excerpt = "";
  if (string && string.length >= max) {
    excerpt = string.substring(0, max - 1);
    excerpt = excerpt + " ... ";
    return excerpt;
  }
  return string;
};
export { string_excerpt };
