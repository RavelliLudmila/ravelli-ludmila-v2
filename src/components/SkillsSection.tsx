'use client';

import { technicalSkills } from '@/helpers/skills.helpers';

const SkillsSection = () => {
    return (
        <section id="skills" className="min-h-screen py-20 md:pl-14 flex items-center bg-background">
            <div className="w-full">
                <div className="relative overflow-hidden py-8">
                    <div className="flex animate-infinite-scroll-fast-right sm:animate-infinite-scroll-slow-right hover:[animation-play-state:paused]">
                        {[...technicalSkills, ...technicalSkills, ...technicalSkills, ...technicalSkills].map((skill, i) => (
                            <div key={`${skill.name}-${i}`} className="group relative min-w-[110px] sm:min-w-[125px]">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="text-center">
                                        <p className="text-secondary/60 whitespace-nowrap">{skill.name}</p>
                                    </div>
                                    <skill.icon className="w-8 h-8 text-secondary-foreground dark:text-secondary transition-all duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className="my-8 text-center">
                    <span className="text-gradient-secondary">Stack técnico</span>
                </h2>
                <p className="text-center my-8 opacity-70 max-w-2xl mx-12 md:mx-auto">Tecnologías y herramientas que domino para crear experiencias web</p>
                <div className="relative overflow-hidden py-8">
                    <div className="flex animate-infinite-scroll-fast-left sm:animate-infinite-scroll-slow-left hover:[animation-play-state:paused]">
                        {[...technicalSkills, ...technicalSkills, ...technicalSkills, ...technicalSkills].map((skill, i) => (
                            <div key={`${skill.name}-${i}`} className="group relative min-w-[110px] sm:min-w-[125px]">
                                <div className="flex flex-col items-center gap-3">
                                    <skill.icon className="w-8 h-8 text-secondary-foreground dark:text-secondary transition-all duration-300" />
                                    <div className="text-center">
                                        <p className="text-secondary/60 whitespace-nowrap">{skill.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
