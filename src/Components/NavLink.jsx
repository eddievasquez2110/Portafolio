import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ to, active, section, children }) {
    return (
        section ? 
        <a
            href={to}
            className={
                active
                    ? 'inline-flex text-center items-center leading-5 text-white border-b-4 border-yellow-600 focus:outline-none focus:font-medium focus:border-yellow-600 focus:scale-110 transition duration-150 ease-in-out'
                    : 'inline-flex text-center items-center leading-5 text-white border-b-4 border-transparent hover:border-yellow-600 hover:font-medium hover:scale-110 focus:outline-none focus:font-medium focus:border-yellow-600 focus:scale-110 transition duration-150 ease-in-out'
            }
        >
            {children}
        </a> : <Link
            to={to}
            className={
                active
                    ? 'inline-flex text-center items-center leading-5 text-white border-b-4 border-yellow-600 focus:outline-none focus:font-medium focus:border-yellow-600 focus:scale-110 transition duration-150 ease-in-out'
                    : 'inline-flex text-center items-center leading-5 text-white border-b-4 border-transparent hover:border-yellow-600 hover:font-medium hover:scale-110 focus:outline-none focus:font-medium focus:border-yellow-600 focus:scale-110 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>

    );
}
