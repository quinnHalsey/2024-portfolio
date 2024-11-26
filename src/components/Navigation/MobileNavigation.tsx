import { useState } from 'react';

import NavButton from './NavButton';

import { Hamburger, HamburgerClose } from 'src/graphics';

const MobileNavigation = ({ navItems }: { navItems: JSX.Element[] }) => {
    const [open, setOpen] = useState(false);
    return (
        <nav
            className={`navigation-wrapper mobile__navigation-wrapper ${
                open ? 'open' : ''
            }`}
        >
            <button
                className='navigation-button hamburger-button'
                aria-label='Open navigation'
                onClick={() => setOpen(!open)}
            >
                {open ? <HamburgerClose /> : <Hamburger />}
            </button>
            {open && (
                <ul className='mobile__navigation-content'>
                    {navItems.map((item: JSX.Element, i: number) => {
                        return item;
                    })}
                </ul>
            )}
        </nav>
    );
};

export default MobileNavigation;
