import { FC } from 'react';
import { ReactNode } from 'react';

import { roboto } from '@/src/styles/fonts';

export const MonoText: FC<{ children: ReactNode }> = ({ children }) => (
    <div className={`${roboto.className} uppercase text-[15px] tracking-[1px] text-blackM`}>{children}</div>
);

