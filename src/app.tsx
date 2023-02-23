import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { renderApp } from '@robinplatform/toolkit/react';

const Page: React.FC = () => {
    return (
        <>
            <Toaster />

            <button type="button" onClick={() => toast.success('toasted')}>make toast</button>
        </>
    );
};

renderApp(<Page />);

