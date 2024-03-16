import * as React from 'react';

interface IconButtonProps {
    title: string;
    href: string;
    imgSrc: string;
}

const IconButton: React.FC<IconButtonProps> = ({ title, href, imgSrc }) => {
    return (
        <a title={title} href={href} target="_blank" rel="noopener noreferrer">
            <img height="48" width="48" src={imgSrc} alt={title} className="icon-button"/>
        </a>
    );
};

export default IconButton;