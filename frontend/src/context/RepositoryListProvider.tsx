import axios, { AxiosResponse } from 'axios';
import React, { createContext, useCallback, useReducer } from 'react';
import { RepositoryListContextModel } from '../interfaces/repository-list-context.model';
import { Repository } from '../interfaces/repository.model';
import {
    initialRepositoryListState,
    LoadRepositoriesAction,
    repositoryListReducer,
    SetErrorAction,
} from '../reducers/repositoryListReducer';
import { RepositoryListActionsEnum } from '../types/repository-list.types';

const initialContext = {} as RepositoryListContextModel;

export const RepositoryListContext = createContext(initialContext);

type RepositoryListProviderProps = {
    children: JSX.Element;
};

// This provider handles the repository list pagination
export const RepositoryListProvider: React.FC<RepositoryListProviderProps> = ({
    children,
}: RepositoryListProviderProps) => {
    const [repositoryListState, dispatch] = useReducer(
        repositoryListReducer,
        initialRepositoryListState
    );
    // this function is expose for the sake of load repositories by owner
    const loadRepositories = useCallback(
        async (owner: string, page: number = 1, perPage: number = 10) => {
            // dispatch a start-loading action to show the loader compoment
            dispatch({ type: RepositoryListActionsEnum.startLoading });
            try {
                const response: AxiosResponse<Repository[]> = await axios.get(
                    `https://api.github.com/users/${owner}/repos?sort=updated&per_page=10&page=${page}`
                );
                const repositories = response.data;
                const loadAction = {
                    type: RepositoryListActionsEnum.loadRepositories,
                    payload: repositories,
                } as LoadRepositoriesAction;

                dispatch(loadAction);
            } catch (error) {
                // dispatch an error action
                const errorAction = {
                    type: RepositoryListActionsEnum.errorOnload,
                    payload: 'Error on load',
                } as SetErrorAction;
                dispatch(errorAction);
            }
        },
        [dispatch]
    );
    // only loadRepositories and repositoryListState are expose throught the provider
    return (
        <RepositoryListContext.Provider
            value={{
                repositoryListState,
                loadRepositories,
            }}
        >
            {children}
        </RepositoryListContext.Provider>
    );
};
