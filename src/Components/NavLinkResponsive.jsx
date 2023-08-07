import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinkResponsive({ method = 'get', as = 'a', to, active, section, children }) {
    
    return ( 
        section?
        <a
            method={method}
            as={as}
            href={to}
            className={
                active
                    ? 'w-full flex items-start pl-3 pr-4 py-2 border-l-4 border-yellow-600 text-yellow-900 focus:text-yellow-900 focus:border-yellow-600 focus:outline-none transition duration-150 ease-in-out'
                    : 'w-full flex items-start pl-3 pr-4 py-2 border-l-4 border-transparent text-black hover:text-yellow-900 hover:bg-yellow-100 hover:border-yellow-600 text-base font-medium focus:border-yellow-600 focus:text-yellow-900 focus:outline-none transition duration-150 ease-in-out'
            }
        >
            {children}
        </a> : <Link
            method={method}
            as={as}
            to={to}
            className={
                active
                    ? 'w-full flex items-start pl-3 pr-4 py-2 border-l-4 border-yellow-600 text-yellow-900 focus:text-yellow-900 focus:border-yellow-600 focus:outline-none transition duration-150 ease-in-out'
                    : 'w-full flex items-start pl-3 pr-4 py-2 border-l-4 border-transparent text-black hover:text-yellow-900 hover:bg-yellow-100 hover:border-yellow-600 text-base font-medium focus:border-yellow-600 focus:text-yellow-900 focus:outline-none transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
        
        
    );
}