import { FC } from 'react';

import { roboto } from '@/src/styles/fonts';

export const MonoText: FC<{ children: any }> = ({ children }) => (
    <div className={`${roboto.className} uppercase text-[15px] tracking-[1px] text-blackM`}>{children}</div>
);

