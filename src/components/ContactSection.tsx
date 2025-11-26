'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, X, Mail, Linkedin, Github, FileText, ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from './ui/input';

interface ContactSectionProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ChatMessage {
    text?: string;
    content?: React.ReactNode;
    action?: string;
}

interface ContactItemProps {
    id: string;
    icon: React.ReactNode;
    label: string;
    value: string;
    action?: string;
    className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isOpen, onClose }) => {
    const contactItems: ContactItemProps[] = [
        {
            id: 'location',
            icon: <MapPin className="w-4 h-4" opacity={0.5} />,
            label: 'Ubicación',
            value: 'Santa Fe Capital, Argentina',
        },
        {
            id: 'email',
            icon: <Mail className="w-4 h-4" opacity={0.5} />,
            label: 'Email',
            value: 'lud.ravelli@gmail.com',
            action: 'email',
            className: 'hover:text-purple-700 dark:hover:text-fuchsia-300',
        },
        {
            id: 'linkedin',
            icon: <Linkedin className="w-4 h-4" opacity={0.5} />,
            label: 'LinkedIn',
            value: '/in/ravelliludmila',
            action: 'linkedin',
            className: 'hover:text-blue-700 dark:hover:text-blue-300',
        },
        {
            id: 'github',
            icon: <Github className="w-4 h-4" opacity={0.5} />,
            label: 'GitHub',
            value: '/RavelliLudmila',
            action: 'github',
            className: 'hover:text-orange-700 dark:hover:text-orange-300',
        },
        {
            id: 'cv',
            icon: <FileText className="w-4 h-4" opacity={0.5} />,
            label: 'CV',
            value: 'Descargar CV',
            action: 'download_cv',
            className: 'hover:text-green-700 dark:hover:text-green-300',
        },
    ];

    const [messages] = useState<ChatMessage[]>([
        {
            text: '¡Hola! Aquí tienes mis datos de contacto. No dudes en escribirme o revisar mi trabajo.',
        },
        ...contactItems.map((item) => ({
            content: (
                <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="flex items-center justify-between w-full">
                        {item.label}: {item.value}
                        {item.action && <ExternalLink className="w-3 h-3" opacity={0.5} />}
                    </span>
                </div>
            ),
            action: item.action,
        })),
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    if (!isOpen) return null;

    const handleContactAction = (action: string) => {
        switch (action) {
            case 'email':
                window.open(
                    'https://mail.google.com/mail/u/0/?to=lud.ravelli@gmail.com&su=Oportunidad+Laboral&body=Hola+Ludmila,%0A%0AHe+visto+tu+portfolio+y+me+interesa+conocer+m%C3%A1s+sobre+tu+experiencia+como+Frontend+Developer.%0A%0A%5BEscribe+tu+mensaje+aqu%C3%AD%5D%0A%0ASaludos,+%5BTu+Nombre%5D.&fs=1&tf=cm',
                    '_blank'
                );
                break;
            case 'github':
                window.open('https://github.com/RavelliLudmila', '_blank');
                break;
            case 'linkedin':
                window.open('https://linkedin.com/in/RavelliLudmila', '_blank');
                break;
            case 'download_cv':
                const link = document.createElement('a');
                link.href = '/Ludmila Ravelli – CV – Frontend Developer.pdf';
                link.download = 'Ludmila Ravelli – CV – Frontend Developer.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center mx-4 md:justify-end md:pr-4 pb-10 pointer-events-none">
            <Card
                className="pointer-events-auto w-full max-w-md min-h-[500px] gap-0 py-4"
                style={{
                    boxShadow: '0 0 40px hsl(var(--primary) / 0.15), 0 20px 60px hsl(var(--muted) / 0.3)',
                }}
            >
                <div className="flex items-center justify-between px-4 pb-4 mb-0 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-secondary to-primary flex items-center text-white justify-center font-semibold text-sm">
                            LR
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-foreground text-sm">Work Together?</p>
                            <p className="text-xs text-muted-foreground">lud.ravelli@gmail.com</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar chat">
                        <X className="w-4 h-4" />
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                    {messages.map((msg, index) => (
                        <div key={index} className="flex justify-start">
                            <div className="space-y-2 max-w-[90%] sm:max-w-[80%] w-full">
                                <div
                                    className={`px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                                        msg.action
                                            ? 'bg-muted text-foreground cursor-pointer hover:bg-muted/80 transition-colors ' +
                                              (contactItems.find((item) => item.action === msg.action)?.className || '')
                                            : 'bg-muted text-foreground'
                                    }`}
                                    onClick={() => msg.action && handleContactAction(msg.action)}
                                >
                                    {msg.content || msg.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="px-4 pt-3 border-t border-border flex items-center gap-2">
                    <div className="flex items-center gap-2 flex-1">
                        <Input type="text" placeholder={'Escribe un mensaje'} disabled={true} className="flex-1 text-sm" />
                    </div>
                    <Button size="icon" aria-label="Enviar mensaje" className="shrink-0" disabled={true}>
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default ContactSection;
