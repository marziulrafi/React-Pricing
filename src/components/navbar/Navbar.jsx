import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
        name: "Home",
        path: "/home",
        id: 1
    },
    {
        name: "About Us",
        path: "/about-us",
        id: 2
    },
    {
        name: "Services",
        path: "/services",
        id: 3
    },
    {
        name: "Contact",
        path: "/contact",
        id: 4
    },
    {
        name: "Blog",
        path: "/blog",
        id: 5
    }
];


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden cursor-pointer'></X> :
                        <Menu className='md:hidden cursor-pointer'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000
                    ${open ? 'top-11' : '-top-40'}
                    bg-amber-200`}>
                    {links}
                </ul>
                <h3 className='ml-4'>Gym Mania</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>


            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;