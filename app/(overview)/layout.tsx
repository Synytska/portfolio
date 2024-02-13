import { ReactNode } from 'react';

import { Footer } from '@/src/ui/modules/footer/Footer';

const ContactLayout = ({ children }: { children: ReactNode }) => (
    <div>
        {children}
        <Footer />
    </div>
);

export default ContactLayout;

