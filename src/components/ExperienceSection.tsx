'use client';

import ExperienceTimelineMd from './experience/ExperienceTimelineMd';
import ExperienceTimeline from './experience/ExperienceTimeline';

const ExperienceSection = () => {
    return (
        <section id="experience" className="min-h-screen py-14 px-6 md:pl-16 flex items-center gradient-bg">
            <div className="w-full">
                <div className="text-center">
                    <h2 className="mb-6 text-center">
                        <span className="text-gradient">Experiencia y Formación</span>
                    </h2>
                    <p className="mb-6 text-center opacity-70 max-w-2xl mx-auto">Mi trayectoria profesional y academica en tecnologia y diseño.</p>
                </div>

                <div className='hidden md:block'>
                    <ExperienceTimelineMd />
                </div>
                <div className='block md:hidden'>
                    <ExperienceTimeline />
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
