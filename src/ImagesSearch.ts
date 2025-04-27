import axios from "axios";
import { ImageData } from "./types/img";

export const fetchImages = async (
  value: string,
  currentPage: number
): Promise<ImageData[]> => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: value,
        page: currentPage,
      },
      headers: {
        Authorization: "Client-ID 6iUluOeTzK22BMcX1HLHpS-4uq3_TNecfNb_HR7BhoM",
      },
    });
    return response.data.results;
  } catch (error) {
    return [];
  }
};
