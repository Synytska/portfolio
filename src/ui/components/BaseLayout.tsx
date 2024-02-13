import { FC, PropsWithChildren } from 'react';

import { Header } from '../modules/header/Header';

import { syne } from '@/src/styles/fonts';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
    <div className={`${syne.className} antialiased p-4 text-blackM`}>
        <div className="border border-blackM px-6 md:px-8 lg:px-10">
            <div className="w-full max-w-7xl mx-auto my-0">
                <Header />
                {children}
            </div>
        </div>
    </div>
);

