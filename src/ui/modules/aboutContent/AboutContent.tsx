import { Divider } from '@/src/ui/components/Divider';
import { AboutInfo } from './components/AboutInfo/AboutInfo';
import { AboutCertification } from './components/AboutCertification/AboutCertification';

export const AboutContent = () => (
    <>
        <Divider />
        <div className="padding-M">
            <AboutInfo />
            <Divider />
            <AboutCertification />
        </div>
    </>
);

