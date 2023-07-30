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
                    ? 'border-indigo-500/100 text-green-300  border-indigo-500/100 focus:outline-none focus:text-indigo-500/100 focus:border-indigo-400/100 focus:border-indigo-200/100'
                    : 'border-transparent text-black hover:text-gray-800 hover:bg-indigo-200/100 hover:border-indigo-400/100'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}