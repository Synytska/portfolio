import { MonoText } from './MonoText';
import { MADE_BY } from '../modules/footer/constants/footerconstants';

export const MadeByFooter = () => (
    <div className="py-[3rem]">
        <MonoText>
            <p>©&nbsp;{MADE_BY}</p>
        </MonoText>
    </div>
);
