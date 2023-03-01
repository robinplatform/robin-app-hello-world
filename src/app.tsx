import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { renderApp } from '@robinplatform/toolkit/react';
import { useRpcQuery } from '@robinplatform/toolkit/react/rpc';
import '@robinplatform/toolkit/styles.css';
import './styles.css';
import { getOsPlatform } from './app.server';

const Page: React.FC = () => {
    const { data: info } = useRpcQuery(getOsPlatform, {});

    return (
        <>
            <Toaster />

            <button type="button" onClick={() => toast.success(`You are on ${info?.platform}!`)}>make toast</button>
        </>
    );
};

renderApp(<Page />);

