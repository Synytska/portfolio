import { ModalWindow } from './ModalWindow';

import { CERTIFIC_SECT } from '@/src/ui/constants/mainconstants';
import { PARAGRAPH_CERTIFIC } from '../../constants/aboutitems';

export const AboutCertification = () => (
    <div className="grid grid-rows-[auto,_auto] grid-cols-1 pt-8 gap-y-2 md:pt-12 lg:pt-16">
        <div>
            <div className="h2-wrap-M">
                <h2 className="h2-M">{CERTIFIC_SECT}</h2>
            </div>
            <div className="max-w-[22rem] mb-6 w-full md:mb-10 lg:mb-12">
                <p className="font-Mier text-xl md:text-[1.4rem] m-0">{PARAGRAPH_CERTIFIC}</p>
            </div>
        </div>
        <ModalWindow />
    </div>
);

