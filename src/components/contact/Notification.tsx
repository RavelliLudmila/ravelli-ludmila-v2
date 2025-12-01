'use client';

import { Send } from 'lucide-react';
import { Button } from '../ui/button';
import { useContact } from '@/context/ContactContext';

const Notification = () => {
    const { open } = useContact();

    return (
        <div className="hidden md:block fixed bottom-0 right-4 z-50">
            <Button
                type="button"
                className="flex items-center bg-secondary text-white justify-between rounded-t-xl rounded-b-none h-10 w-[275px]"
                onClick={open}
                aria-label="Abrir contacto"
            >
                <p className="text-base font-medium ml-2">¿Trabajamos juntos?</p>
                <Send className="size-5 mr-2" />
            </Button>
        </div>
    );
};

export default Notification;
