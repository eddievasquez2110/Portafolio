import React from 'react';
import '../Assets/css/Button.css';

export default function Button({ color, url, href ,children }) {
    return (
        <a
            className={color}
            to={url}
            href={href}
        >
            {children}
        </a>
    );
}