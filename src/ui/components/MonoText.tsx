import { FC } from 'react';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({ subsets: ['latin'], weight: ['400'], style: 'normal' });

export const MonoText: FC<{ children: any }> = ({ children }) => (
    <div className={`${roboto.className} uppercase text-[15px] tracking-[1px] text-blackM`}>{children}</div>
);

