import { RepositoryListState } from './../reducers/repositoryListReducer';

export interface RepositoryListContextModel {
    repositoryListState: RepositoryListState;
    loadRepositories: (
        owner: string,
        page?: number,
        perPage?: number
    ) => Promise<void>;
}
