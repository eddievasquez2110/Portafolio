import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinkResponsive({ method = 'get', as = 'a', to, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            to={to}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-green-300 text-green-300  border-green-300 focus:outline-none focus:text-green-300 focus:border-green-300 focus:border-greeb-300'
                    : 'border-transparent text-black hover:text-gray-800 hover:bg-green-100 hover:border-green-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}