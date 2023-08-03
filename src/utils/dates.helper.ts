export const datasRegExp = (content: string) => {
  const reg = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  const searchstr = content ? content : "";
  const dateArr = searchstr.match(reg);
  const dates = dateArr ? dateArr.join(",") : "";
  return dates;
};
