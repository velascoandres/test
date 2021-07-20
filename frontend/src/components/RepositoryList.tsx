import React from 'react';
import { Repository } from '../interfaces/repository.model';
import { RepositoryItem } from './RepositoryItem';

export type RepositoryListProps = { repositories: Repository[] };

export const RepositoryList: React.FC<RepositoryListProps> = ({
    repositories,
}: RepositoryListProps) => {
    return (
        <div className="container">
            {repositories.map((repository: Repository) => {
                return (
                    <RepositoryItem
                        key={repository.id}
                        repository={repository}
                    />
                );
            })}
        </div>
    );
};
