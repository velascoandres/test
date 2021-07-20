import React, { useContext, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { RepositoryListContext } from '../context/RepositoryListProvider';
import { Loader } from './Loader';
import { RepositoryList } from './RepositoryList';

export type PaginatedRepositoryListProps = {
    owner: string;
    totalRepos: number;
};

export const PaginatedRepositoryList: React.FC<PaginatedRepositoryListProps> =
    ({ owner, totalRepos }: PaginatedRepositoryListProps) => {
        const { loadRepositories, repositoryListState } = useContext(
            RepositoryListContext
        );
        const { repositories, isLoading } = repositoryListState;
        const pageCount = Math.ceil(totalRepos / 10);
        useEffect(() => {
            loadRepositories(owner);
        }, [loadRepositories, owner]);

        const handlePageClick = (data: { selected: number }) => {
            const selected = data.selected;
            loadRepositories(owner, selected + 1);
        };

        return (
            <>
                {isLoading && <Loader />}
                <RepositoryList repositories={repositories} />
                <ReactPaginate
                    pageCount={pageCount}
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    breakLinkClassName={'page-link'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                />
            </>
        );
    };
