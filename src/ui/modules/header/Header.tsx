import { MonoText } from '../../components/MonoText';
import { Burger } from './components/Burger/Burger';
import { Navigation } from './components/Navigation/Navigation';

export const Header = () => (
    <MonoText>
        <div className="grid-gap4-M grid-cols-[1fr_auto] md:grid-cols-[auto_1fr] justify-between py-6">
            <Burger />
            <Navigation />
        </div>
    </MonoText>
);

