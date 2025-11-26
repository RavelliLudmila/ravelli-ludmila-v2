'use client';

import { ExternalLink } from 'lucide-react';
import { useContact } from '@/context/ContactContext';

const Footer = () => {
    const { open } = useContact();

    return (
        <footer className="bg-background">
            <div className="flex justify-between text-muted-foreground w-full py-1 px-3">
                <button onClick={open} className="flex items-center text-sm underline sm:no-underline sm:hover:underline">
                    Contacto
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 sm:opacity-100" />
                </button>

                <p className="text-sm">{new Date().getFullYear()} | Developed by Ludmila Ravelli.</p>
            </div>
        </footer>
    );
};

export default Footer;
