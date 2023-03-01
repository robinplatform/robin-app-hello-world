import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { renderApp } from '@robinplatform/toolkit/react';
import { useRpcQuery } from '@robinplatform/toolkit/react/rpc';
import '@robinplatform/toolkit/styles.css';
import './styles.css';
import { getOsPlatform } from './app.server';

const Page: React.FC = () => {
    const { data: info, error } = useRpcQuery(getOsPlatform, {});

    return (
        <>
            <Toaster />

            {!info && !error && <p>Loading ...</p>}
            {error && <p>Error: {String(error)}</p>}

            {info && <button type="button" className={'robin-rounded robin-bg-dark-blue robin-text-white robin-pad'} onClick={() => toast.success(`You are on ${info?.platform}!`)}>🍞 make toast</button>}
        </>
    );
};

renderApp(<Page />);
