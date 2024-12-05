import { useState } from 'react';

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
            <ul
                className='mobile__navigation-content'
                onClick={() => setOpen(false)}
            >
                {navItems.map((item: JSX.Element, i: number) => {
                    return (
                        <li className='nav-item__wrapper' key={i}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default MobileNavigation;
