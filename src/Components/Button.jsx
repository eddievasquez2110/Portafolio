import React from 'react';
import '../Assets/css/Button.css';

export default function Button({ color, href ,children }) {
    return (
        <a
            className={color}
            href={href}
        >
            {children}
        </a>
    );
}