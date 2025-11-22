'use client';

import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from './ui/input';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
    isOpen: boolean;
    onClose: () => void;
}

type ChatAuthor = 'bot' | 'user';

interface ChatButton {
    label: string;
    action: string;
}

interface ChatMessage {
    author: ChatAuthor;
    text: string;
    buttons?: ChatButton[];
}

type ContactStep = 'name' | 'email' | 'project' | 'timeline' | 'reference' | 'summary' | 'completed';

interface FormData {
    name: string;
    email: string;
    project: string;
    timeline?: string;
    reference?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState<ContactStep>('name');
    const [formData, setFormData] = useState<Partial<FormData>>({});
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            author: 'bot',
            text: '¡Hola! Empecemos por tu nombre. ¿Cómo te llamás?',
        },
    ]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    if (!isOpen) return null;

    const addMessage = (message: ChatMessage) => {
        setMessages((prev) => [...prev, message]);
    };

    const sendToApi = async (data: FormData) => {
        try {
            const templateParams = {
                from_name: data.name || '',
                from_email: data.email || '',
                project: data.project || '',
                timeline: data.timeline || '',
                reference: data.reference || '',
                to_email: 'lud.ravelli@gmail.com',
            };

            await emailjs.send('service_rwu98wp', 'template_h6b2oxp', templateParams, '4wN4T4JYzHW4g0u61');

            addMessage({
                author: 'bot',
                text: '¡Perfecto! Tu mensaje ha sido enviado a lud.ravelli@gmail.com. Te responderé pronto!',
            });
            setCurrentStep('completed');
        } catch (error) {
            console.error('Error al enviar:', error);
            addMessage({
                author: 'bot',
                text: 'Hubo un error al enviar tu mensaje. Podés intentar de nuevo o escribirme directamente a lud.ravelli@gmail.com',
            });
        }
    };

    const showSummary = (data: FormData) => {
        setCurrentStep('summary');

        const summaryText =
            `Resumen de tu consulta:\n` +
            `Nombre: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Proyecto: ${data.project}\n` +
            (data.timeline ? `Timeline: ${data.timeline}\n` : '') +
            (data.reference ? `Referencia: ${data.reference}` : '') +
            `\nSi todo está bien, podés enviar o cancelar.`;

        addMessage({
            author: 'bot',
            text: summaryText,
            buttons: [
                { label: 'Enviar', action: 'send' },
                { label: 'Cancelar', action: 'cancel' },
            ],
        });
    };

    const advanceStepWithValue = (value: string) => {
        const trimmed = value.trim();

        if (!trimmed && currentStep !== 'timeline' && currentStep !== 'reference') {
            return;
        }

        const userText = trimmed || 'Saltar';
        addMessage({ author: 'user', text: userText });

        const nextFormData: Partial<FormData> = {
            ...formData,
            [currentStep]: trimmed,
        };
        setFormData(nextFormData);

        if (currentStep === 'name') {
            setCurrentStep('email');
            addMessage({
                author: 'bot',
                text: `Hola ${trimmed || '👋'} ¿Cuál es tu email?`,
            });
            return;
        }

        if (currentStep === 'email') {
            setCurrentStep('project');
            addMessage({
                author: 'bot',
                text: 'Perfecto. Contame sobre tu proyecto o idea.',
            });
            return;
        }

        if (currentStep === 'project') {
            setCurrentStep('timeline');
            addMessage({
                author: 'bot',
                text: '¡Genial! ¿Cuál es tu timeline estimado? (opcional)\nPodés presionar Enter para continuar.',
            });
            return;
        }

        if (currentStep === 'timeline') {
            setCurrentStep('reference');
            addMessage({
                author: 'bot',
                text: '¿Cómo conociste mi trabajo? (opcional)\nPodés presionar Enter para continuar.',
            });
            return;
        }

        if (currentStep === 'reference') {
            const fullData: FormData = {
                name: nextFormData.name || '',
                email: nextFormData.email || '',
                project: nextFormData.project || '',
                timeline: nextFormData.timeline,
                reference: trimmed || nextFormData.reference,
            };
            showSummary(fullData);
        }
    };

    const handleSummaryAction = (raw: string) => {
        const trimmed = raw.trim();
        const value = (trimmed || 'Enviar').toLowerCase();
        addMessage({ author: 'user', text: trimmed || 'Enviar' });

        if (value === 'enviar' || value === 'send') {
            const data: FormData = {
                name: formData.name || '',
                email: formData.email || '',
                project: formData.project || '',
                timeline: formData.timeline,
                reference: formData.reference,
            };
            void sendToApi(data);
        } else if (value === 'cancelar' || value === 'cancel') {
            setCurrentStep('name');
            setFormData({});
            addMessage({
                author: 'bot',
                text: 'No hay problema. Empecemos de nuevo. ¿Cómo te llamás?',
            });
        }
    };

    const handleButtonAction = (action: string) => {
        if (currentStep === 'summary') {
            if (action === 'send') {
                handleSummaryAction('Enviar');
            } else if (action === 'cancel') {
                handleSummaryAction('Cancelar');
            }
        }
    };

    const handleSend = () => {
        if (currentStep === 'summary' || currentStep === 'completed') {
            return;
        }

        if (!inputValue.trim() && currentStep !== 'timeline' && currentStep !== 'reference') {
            return;
        }

        const value = inputValue;
        setInputValue('');

        advanceStepWithValue(value);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-end pr-4 pb-4 pointer-events-none">
            <Card
                className="pointer-events-auto w-full max-w-md h-[460px] gap-0 py-4"
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
                        <div key={index} className={msg.author === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                            <div className="space-y-2 max-w-[80%]">
                                <div
                                    className={`px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                                        msg.author === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                                {msg.buttons && msg.buttons.length > 0 && (
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        {msg.buttons.map((btn, i) => (
                                            <Button
                                                key={i}
                                                size="sm"
                                                variant={btn.action === 'send' ? 'default' : 'outline'}
                                                onClick={() => handleButtonAction(btn.action)}
                                            >
                                                {btn.label}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className="px-4 pt-3 border-t border-border flex items-center gap-2">
                    <div className="flex items-center gap-2 flex-1">
                        <MessageCircle className="w-4 h-4 text-muted-foreground" />
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                                e.key === 'Enter' && currentStep !== 'summary' && currentStep !== 'completed' && handleSend()
                            }
                            placeholder={
                                'Escribe un mensaje'
                            }
                            disabled={currentStep === 'summary' || currentStep === 'completed'}
                            className="flex-1 text-sm"
                        />
                    </div>
                    <Button
                        size="icon"
                        onClick={handleSend}
                        aria-label="Enviar mensaje"
                        className="shrink-0"
                        disabled={currentStep === 'summary' || currentStep === 'completed'}
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default ContactSection;
