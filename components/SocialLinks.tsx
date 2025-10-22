import React from 'react';
import type { Link } from '../types';

interface SocialLinksProps {
  links: Link[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      {links.map((link) => (
        link.icon && (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className="text-slate-600 hover:text-slate-900 transition-transform duration-200 ease-in-out hover:scale-110"
          >
            <link.icon className="w-6 h-6" />
          </a>
        )
      ))}
    </div>
  );
};

export default SocialLinks;