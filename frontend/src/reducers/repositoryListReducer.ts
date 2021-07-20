import { RepositoryListActionsEnum } from '../types/repository-list.types';
import { Repository } from './../interfaces/repository.model';

export type RepositoryListState = {
    repositories: Repository[];
    isLoading: boolean;
    error: string;
};

export const initialRepositoryListState = {
    repositories: [],
    isLoading: false,
    error: '',
} as RepositoryListState;

export interface RepositoryListAction {
    type: RepositoryListActionsEnum;
}

export interface StartLoadingAction extends RepositoryListAction {
    type: RepositoryListActionsEnum.startLoading;
}

export interface SetErrorAction extends RepositoryListAction {
    type: RepositoryListActionsEnum.errorOnload;
    payload: string;
}

export interface LoadRepositoriesAction extends RepositoryListAction {
    type: RepositoryListActionsEnum.loadRepositories;
    payload: Repository[];
}

export const repositoryListReducer = (
    state: RepositoryListState,
    action: RepositoryListAction
): RepositoryListState => {
    switch (action.type) {
        case RepositoryListActionsEnum.startLoading:
            return {
                ...state,
                isLoading: true,
            };
        case RepositoryListActionsEnum.loadRepositories:
            const loadAction = action as LoadRepositoriesAction;
            return {
                ...state,
                repositories: loadAction.payload,
                isLoading: false,
                error: '',
            };
        case RepositoryListActionsEnum.errorOnload:
            const errorAction = action as SetErrorAction;
            return {
                ...state,
                error: errorAction.payload,
                isLoading: false,
            };
        default:
            return initialRepositoryListState;
    }
};
