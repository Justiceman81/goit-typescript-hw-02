import axios, { AxiosResponse } from "axios";

const API_KEY: string = "hT03SIqd8NDksToUf8tBUWWowzMT8DH0NM7dIkKDnas";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

interface PhotoResponse {
  results: any[];
  total: number;
  total_pages: number;
}

const getPhotos = async (
  query: string,
  page: number
): Promise<PhotoResponse> => {
  const { data }: AxiosResponse<PhotoResponse> = await axios.get(
    `search/photos?query=${query}&page=${page}`
  );
  return data;
};

export default getPhotos;
