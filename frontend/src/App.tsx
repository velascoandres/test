import React from 'react';
import { ProfileProvider } from './context/ProfileContext';
import { AppRouter } from './router/AppRouter';

export const App: React.FC = () => {
    return (
        <>
            <ProfileProvider>
                <AppRouter />
            </ProfileProvider>
        </>
    );
};
