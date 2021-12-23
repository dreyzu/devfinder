import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/",
});

export const getUser = async (id: string) => api.get(`users/${id}`).then((res) => res.data);
