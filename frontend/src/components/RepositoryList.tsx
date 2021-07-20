import React from 'react';
import { Repository } from '../interfaces/repository.model';
import { RepositoryItem } from './RepositoryItem';

export type RepositoryListProps = { repositories: Repository[] };

export const RepositoryList: React.FC<RepositoryListProps> = ({
    repositories,
}: RepositoryListProps) => {
    return (
        <div className="container">
            {repositories.map((repository: Repository, index: number) => {
                const animatedClass =
                    index % 2 === 0
                        ? 'animate__zoomInLeft'
                        : 'animate__zoomInRight';

                return (
                    <div
                        key={repository.id}
                        className={`animate__animated ${animatedClass}`}
                    >
                        <RepositoryItem repository={repository} />
                    </div>
                );
            })}
        </div>
    );
};
