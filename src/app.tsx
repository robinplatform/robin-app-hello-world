import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const Page: React.FC = () => {
    return (
        <>
            <Toaster />

            <button type="button" onClick={() => toast.success('toasted')}>make toast</button>
        </>
    );
};

