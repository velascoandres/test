import React, { createContext, useCallback, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import {
    GitHubUser,
    ProfileContextModel,
    UserState,
} from '../interfaces/profile-context.model';

const initialProfileContext = {} as ProfileContextModel;

export const ProfileContext = createContext(initialProfileContext);

type ProfileProviderProps = {
    // eslint-disable-next-line no-undef
    children: JSX.Element;
};

const initialState = {
    error: '',
    loading: true,
    user: null,
} as UserState;

// Define the Profile Provider to set github user info global
export const ProfileProvider: React.FC<ProfileProviderProps> = ({
    children,
}: ProfileProviderProps) => {
    const [userState, setUserState] = useState<UserState>(initialState);

    // function to change the current user Profile
    const changeUser = useCallback(
        async (user: string = 'velascoandrs') => {
            try {
                const reponse: AxiosResponse<GitHubUser> = await axios.get(
                    `https://api.github.com/users/${user}`
                );
                setUserState({
                    error: '',
                    loading: false,
                    user: reponse.data,
                });
            } catch (e) {
                setUserState({
                    ...initialState,
                    error: 'Error on fetch user',
                });
            }
        },
        [setUserState]
    );

    return (
        <ProfileContext.Provider
            value={{
                userState,
                changeUser,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};
