import React from 'react';
import { Repository } from '../interfaces/repository.model';
import { Button } from './Button';

import '../css/repository-item.css';

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
        html_url,
        clone_url,
    } = repository;

    const handleUrl = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    // const goToRepository = () => { };

    return (
        <div className="container repository-card">
            <div className="row">
                <div className="col-sm-12">
                    <h4>{full_name}</h4>
                </div>
                <div className="col-sm-12">
                    {language && <span className="lang-badge">{language}</span>}
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
                            title="Clone"
                            iconClass="fa fa-clone"
                            color="pink"
                            onClick={() => handleUrl(clone_url)}
                        />
                    </div>
                    <div className="p-2">
                        <Button
                            title="See more"
                            iconClass="fa fa-code-fork"
                            onClick={() => handleUrl(html_url)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
