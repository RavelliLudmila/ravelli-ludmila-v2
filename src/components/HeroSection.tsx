'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const rotatingSubtitles = [
    { text: 'Frontend Developer · UX/UI · Interacción.', dark: 'hsl(330, 85%, 75%)', light: 'hsl(330, 45%, 35%)' },
    { text: 'Diseño interfaces claras y humanas.', dark: 'hsl(260, 75%, 78%)', light: 'hsl(260, 35%, 40%)' },
    { text: 'Experiencias digitales con intención.', dark: 'hsl(330, 50%, 97%)', light: 'hsl(230, 15%, 25%)' },
    { text: 'Construyendo desde el detalle hacia el todo.', dark: 'hsl(330, 85%, 75%)', light: 'hsl(330, 45%, 35%)' },
    { text: 'Diseño, interacción y arquitectura visual.', dark: 'hsl(260, 75%, 78%)', light: 'hsl(260, 35%, 40%)' },
];

const HeroSection = () => {
    const [currentSubtitle, setCurrentSubtitle] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSubtitle((prev) => (prev + 1) % rotatingSubtitles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x: x * 0.03, y: y * 0.03 });
    };

    return (
        <section
            id="hero"
            className="section-height flex items-center justify-center relative overflow-hidden gradient-bg"
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto px-6 md:px-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-6"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg tracking-wide opacity-70"
                    >
                        Hola, soy
                    </motion.p>

                    <motion.h1
                        className="text-gradient text-8xl p-2"
                        animate={{
                            x: mousePosition.x,
                            y: mousePosition.y,
                        }}
                        transition={{
                            type: 'spring',
                            damping: 25,
                            stiffness: 80,
                            mass: 0.8,
                        }}
                    >
                        Ludmila ravelli
                    </motion.h1>

                    <div className="h-24 flex items-center justify-center">
                        <motion.div
                            key={currentSubtitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl opacity-80"
                            style={
                                {
                                    color: rotatingSubtitles[currentSubtitle].light,
                                } as React.CSSProperties
                            }
                        >
                            {rotatingSubtitles[currentSubtitle].text}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="max-w-2xl mx-auto space-y-4"
                    >
                        <p className="opacity-70 leading-relaxed">Santa Fe, Argentina · Disponibilidad inmediata para relocalización</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex gap-4 justify-center pt-8"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full glass-effect border border-border hover:border-primary transition-all duration-300 hover:shadow-soft"
                        >
                            Contactar
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity duration-300"
                        >
                            Ver proyectos
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection