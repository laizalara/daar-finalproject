import axios from "axios";
import { baseURL } from "..";

export const getBooks = async (q, page, re) => {
    return axios.get(`${baseURL}/search?q=${encodeURIComponent(q)}&page=${page}&re=${re}`);
};
