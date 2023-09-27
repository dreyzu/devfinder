import { baseAxios } from "@/utils/axios";
import { create } from "zustand";

interface User {
    login: string;
    avatar_url: string;
    name: string;
    bio?: string;
    company: string;
    blog: string;
    created_at: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    twitter_username?: string;
    html_url: string;
    location: string;
    organizations_url: string;
    public_repos: number;
    repos_url: string;
}

const initialUserState: User = {
    login: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    name: "The Octocat",
    bio: "",
    company: "GitHub",
    blog: "httpsL//github.blog",
    created_at: "2011-01-25T18:44:36Z",
    followers: 0,
    followers_url: "https://api.github.com/users/octocat/followers",
    following: 0,
    following_url: "https://api.github.com/users/octocat/followings",
    twitter_username: "monatheoctocat",
    html_url: "https://github.com/octocat",
    location: "San Francisco",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    public_repos: 8,
    repos_url: "https://api.github.com/users/octocat/repos",
};

interface UserStore {
    user: User;
    searchQuery: (username: string) => Promise<void>;
}

const useUserStore = create<UserStore>((set) => ({
    user: initialUserState,
    searchQuery: async (username: string) => {
        try {
            const response = await baseAxios.get(username);

            if (response.status === 404) {
                throw new Error("No results");
            }

            const data = await response.data;
            const userFields = {
                login: data.login,
                avatar_url: data.avatar_url,
                name: data.name,
                company: data.company,
                bio: data.bio,
                blog: data.blog,
                created_at: data.created_at,
                followers: data.followers,
                followers_url: data.followers_url,
                following: data.following,
                following_url: data.following_url,
                twitter_username: data.twitter_username,
                html_url: data.html_url,
                location: data.location,
                organizations_url: data.organizations_url,
                public_repos: data.public_repos,
                repos_url: data.repos_url,
            };

            set({ user: { ...initialUserState, ...userFields } });
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                throw new Error("No results");
            }

            throw error.message;
        }
    },
}));

useUserStore.getState().searchQuery("octocat");

export default useUserStore;
