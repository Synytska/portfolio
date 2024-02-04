import { Button } from '@/src/ui/components/Button';
import { VLine } from '@/src/ui/components/VLine';
import { NavList } from './NavList';
import { SocialCircles } from './SocialCircles';

import { HEADER_BUTTON_TEXT } from '../../constants/headeritems';

export const Navigation = () => (
    <header>
        <div className="hidden md:block mx-auto w-full max-w-7xl z-100">
            <div className="flex-center-M justify-end gap-x-8 gap-y-8">
                <NavList />
                <div className="justify-items-end grid-gap4-M grid-cols-[auto_minmax(1px,_1fr)_auto]">
                    <Button
                        name={HEADER_BUTTON_TEXT.name}
                        href={HEADER_BUTTON_TEXT.href}
                        className="text-whiteM bg-blackM border border-blackM py-[0.6rem] px-[1rem] text-center rounded-M md:hidden lg:block hover:bg-[transparent] hover:text-blackM"
                    />
                    <VLine />
                    <SocialCircles />
                </div>
            </div>
        </div>
    </header>
);

