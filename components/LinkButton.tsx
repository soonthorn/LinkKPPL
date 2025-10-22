import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center bg-white/60 backdrop-blur-sm border border-black/10 text-slate-800 font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:bg-white/80 hover:scale-105 active:scale-100 shadow-lg"
    >
      {children}
    </a>
  );
};

export default LinkButton;