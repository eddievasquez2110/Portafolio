import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ to, active, children }) {
    return (
        <Link
            to={to}
            className={
                active
                    ? 'inline-flex text-center items-center leading-5 text-white border-b-4 border-indigo-500/100 focus:outline-none focus:font-medium focus:border-indigo-500/100 transition duration-150 ease-in-out'
                    : 'inline-flex text-center items-center leading-5 text-white border-b-4 border-transparent hover:border-indigo-500/100 hover:font-medium hover:scale-110 focus:outline-none focus:font-medium focus:border-indigo-500/100 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>

    );
}
