// Github user props
export interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: null;
    blog: string;
    location: string;
    email: null;
    hireable: boolean;
    bio: null;
    twitter_username: null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

export interface UserState {
    loading: boolean; // flag for determine when the app is requesting the app
    error: string | null; // if the request has an error
    user: GitHubUser | null; // the user retrieved from github API
}

// For the user ProfileContext the following props and functions are expose
export interface ProfileContextModel {
    userState: UserState;
    changeUser: (user: string) => Promise<void>;
}
