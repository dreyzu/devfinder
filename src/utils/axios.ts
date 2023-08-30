import axios from "axios";

export const baseAxios = axios.create({
    baseURL: "https://api.github.com/users/",
    headers: {
        "X-GitHub-Api-Version": "2022-11-28",
    },
});
