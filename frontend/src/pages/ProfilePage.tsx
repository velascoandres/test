import React, { useContext } from 'react';

import { PaginatedRepositoryList } from '../components/PaginatedRepositoryList';
import { UserCard } from '../components/UserCard';
import { ProfileContext } from '../context/ProfileContext';
import { RepositoryListProvider } from '../context/RepositoryListProvider';
import { GitHubUser } from '../interfaces/profile-context.model';

export const ProfilePage: React.FC = () => {
    const { userState } = useContext(ProfileContext);

    const { user } = userState;
    const { login: owner, public_repos: totalRepos } = user as GitHubUser;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-4">
                    <UserCard user={user as GitHubUser} />
                </div>
                <div className="col-md-8 mt-4">
                    <h4>Repositories ({user?.public_repos}): </h4>
                    <RepositoryListProvider>
                        <PaginatedRepositoryList
                            owner={owner}
                            totalRepos={totalRepos}
                        />
                    </RepositoryListProvider>
                </div>
            </div>
        </div>
    );
};
