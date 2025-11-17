'use client';

import { Skill, technicalSkills } from '@/helpers/skills.helpers';
import { useState } from 'react';

const SkillsSection = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section id="skills" className="min-h-screen py-20 px-6 md:px-14 flex items-center bg-inherit">
            <div className="w-full">
                <h2 className="mb-8 text-center">
                    <span className="text-gradient-secondary">Stack técnico</span>
                </h2>
                <p className="text-center mb-8 opacity-70 max-w-2xl mx-auto">
                    Tecnologías y herramientas que domino para crear experiencias web
                </p>
                <div className="relative overflow-hidden py-8">
                    <div className="flex animate-infinite-scroll-fast sm:animate-infinite-scroll-slow hover:[animation-play-state:paused]">
                        {[...technicalSkills, ...technicalSkills].map((skill, i) => (
                            <div
                                key={`${skill.name}-${i}`}
                                className="group relative min-w-[110px] sm:min-w-[125px] cursor-pointer"
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                style={{
                                    transform: hoveredSkill === skill.name ? 'scale(1.05)' : 'scale(1)',
                                }}
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <skill.icon
                                        className="w-8 h-8 text-secondary-foreground dark:text-secondary transition-all duration-300"
                                        style={{
                                            filter: hoveredSkill === skill.name ? 'drop-shadow(0 0 8px hsl(var(--primary) / 0.6))' : 'none',
                                        }}
                                    />
                                    <div className="text-center">
                                        <p className="text-secondary/60 whitespace-nowrap">{skill.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 max-w-md mx-auto animate-fade-in">
                    <div className="p-4">
                        <p className="text-muted-foreground text-center">
                            {hoveredSkill && technicalSkills.find((skill: Skill) => skill.name === hoveredSkill)?.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
