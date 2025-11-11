const AboutSection = () => {
    return (
        <section id="about" className="section-height px-6 md:px-16 flex items-center justify-center overflow-hidden">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="mb-8 text-center">
                    <span className="text-gradient">Sobre mí</span>
                </h2>

                <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/90">
                    <p className="animate-slide-up">
                        Soy <strong>Ludmila Denis Ravelli</strong>, desarrolladora frontend orientada a la creación de interfaces claras, estéticas y
                        fáciles de usar. Mi formación combina tecnología, diseño y análisis de sistemas para construir experiencias que no solo
                        funcionan, sino que se sienten bien.
                    </p>

                    <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Mi recorrido une dos mundos que me definen: la lógica y la estética. Programar me conecta con la precisión y la estructura;
                        diseñar me permite cuidar la experiencia de quien usa lo que construyo.
                    </p>

                    <div className="glass-effect border border-border rounded-2xl p-6 my-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <blockquote className="text-center">
                            <p className="text-lg md:text-xl italic text-primary-foreground dark:text-primary">
                                &ldquo;La interfaz debería sentirse natural para quien la usa.&rdquo;
                            </p>
                        </blockquote>
                    </div>

                    <p className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        Busco que cada proyecto tenga un propósito, una narrativa visual y una intención clara. Disfruto aprender de los procesos, no
                        solo de los resultados. Creo en soluciones simples, consistentes y sostenibles.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <div className="bg-muted/50 rounded-xl p-5">
                            <h3 className="text-lg font-semibold mb-2 text-primary-foreground dark:text-primary">Filosofía de trabajo</h3>
                            <p className="text-sm md:text-base">
                                Organización, claridad y coherencia. Un buen sistema se construye con intención y se sostiene con consistencia.
                            </p>
                        </div>

                        <div className="bg-muted/50 rounded-xl p-5">
                            <h3 className="text-lg font-semibold mb-2 text-secondary-foreground dark:text-secondary">Valores</h3>
                            <p className="text-sm md:text-base">
                                Respeto por el usuario y por el equipo. Comunicar, documentar y pensar en conjunto siempre mejora el resultado final.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
