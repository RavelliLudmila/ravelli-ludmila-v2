import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { projects } from '../ProjectsSection';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const ProjectsCarousel = () => {
    return (
        <section className="min-h-screen py-16 px-6 md:px-16 gradient-bg">
            <div className="w-full flex flex-col items-center gap-10">
                <div className="w-full">
                    <h2 className="mb-3 text-center">
                        <span className="text-gradient">Proyectos</span>
                    </h2>
                    <p className="text-center opacity-70 max-w-2xl mx-auto">Proyectos reales que combinan tecnología, diseño y propósito</p>
                </div>

                <Carousel className="w-[95%]" opts={{ loop: true, align: 'start' }}>
                    <CarouselContent className="flex items-center">
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="xl:basis-1/2 flex h-full items-stretch">
                                <Card className="mx-2 p-6 flex flex-col shadow-md h-full w-full">
                                    <div className="flex flex-col xl:flex-row items-center gap-6 mb-6 w-full">
                                        <div className="relative w-full xl:w-[60%] h-[200px] overflow-hidden rounded-t-lg xl:rounded-lg">
                                            <Image
                                                src={project.image || '/default-image.png'}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader className="flex flex-col py-0 px-0 gap-2 text-left w-full xl:w-[40%]">
                                            <CardTitle className="font-light text-2xl leading-tight">{project.title}</CardTitle>
                                            <CardDescription className="text-sm">{project.description}</CardDescription>
                                        </CardHeader>
                                    </div>
                                    <CardContent className="p-0 flex-1 flex flex-col">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, id) => (
                                                <span key={id} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex gap-2">
                                            {project.link && (
                                                <Button asChild variant="ghost" size="sm">
                                                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="mr-2 h-3 w-3" />
                                                        <span className="text-xs">Ver Proyecto</span>
                                                    </Link>
                                                </Button>
                                            )}
                                            {project.github && (
                                                <Button asChild variant="ghost" size="sm">
                                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                        <Github className="mr-2 h-3 w-3" />
                                                        <span className="text-xs">Código</span>
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};

export default ProjectsCarousel;
