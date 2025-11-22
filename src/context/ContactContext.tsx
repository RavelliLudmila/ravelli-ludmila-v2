'use client';

import React, { createContext, useContext, useState } from 'react';
import ContactSection from '@/components/ContactSection';

interface ContactContextValue {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const ContactContext = createContext<ContactContextValue | undefined>(undefined);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <ContactContext.Provider value={{ isOpen, open, close }}>
            {children}
            <ContactSection isOpen={isOpen} onClose={close} />
        </ContactContext.Provider>
    );
};

export const useContact = (): ContactContextValue => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};
