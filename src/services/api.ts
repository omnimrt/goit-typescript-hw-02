import axios from "axios";

interface IImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

const accessKey = "MSfKpWeDDkE3-lU3IrMhHlBuwRrDWHcDAchQDL8Uxj4";
const apiUrl = "https://api.unsplash.com/";

export const requestImages = async (): Promise<IImage[]> => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}`
  );
  return data;
};

export const requestImagesByQuery = async (query = "", page = 1) => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
  );
  return data;
};
