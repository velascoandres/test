import React from 'react';
import { Repository } from '../interfaces/repository.model';
import { Button } from './Button';

import '../styles/repository-item.scss';

export type RepositoryItemProps = {
    repository: Repository;
};

export const RepositoryItem: React.FC<RepositoryItemProps> = ({
    repository,
}: RepositoryItemProps) => {
    const {
        full_name,
        stargazers_count: stars,
        description,
        language,
        clone_url,
    } = repository;

    const handleUrl = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className="container repository-card">
            <div className="row">
                <div className="col-sm-12">
                    <h4>{full_name}</h4>
                </div>
                <div className="tagged">
                    {language && <span>{language}</span>}
                </div>

                <div className="col-sm-12">
                    <br />
                    {new Array(stars).fill(1).map((item) => (
                        <span key={item}>
                            <i className="fa fa-star"></i>
                        </span>
                    ))}
                </div>
                <br />
                <div className="col-sm-12">
                    <p>{description}</p>
                </div>
                <div className="col-sm-12 d-flex">
                    <div className="p-2">
                        <Button
                            title="Open"
                            iconClass="fa fa-github"
                            color="dark"
                            onClick={() => handleUrl(clone_url)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
