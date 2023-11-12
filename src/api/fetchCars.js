import axios from "axios";
const BaseUrl = "https://654e19fbcbc3253557425b91.mockapi.io";

export const fetch = async (perPage, page) => {
  const response = await axios.get(
    `${BaseUrl}/advert/?limit=${perPage}&page=${page}`
  );
  return response;
};
export const fetchAll = async () => {
  const response = await axios.get(`${BaseUrl}/advert/`);
  return response;
};
