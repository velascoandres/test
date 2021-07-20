import React from 'react';

import { GitHubUser } from '../interfaces/profile-context.model';

import '../css/user-card.css';

export type UserCardProps = { user: GitHubUser };

export const UserCard: React.FC<UserCardProps> = ({ user }: UserCardProps) => {
    const { name, avatar_url, bio, location } = user;
    return (
        <div className="row user-card">
            <div className="col-sm-12 col-md-4">
                <img
                    src={avatar_url}
                    className="img-fluid circle-img"
                    alt={avatar_url}
                />
            </div>
            <div className="col-sm-12 col-md-8 mt-4">
                <h2>{name}</h2>
                <span>{location}</span>
                <p>{bio}</p>
            </div>
        </div>
    );
};
