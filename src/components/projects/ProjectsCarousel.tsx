import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { projects } from '../ProjectsSection';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const ProjectsCarousel = () => {
    return (
        <section className="min-h-screen py-14 px-6 md:pl-16 flex items-center gradient-bg">
            <div className="w-full">
                <div className="text-center">
                    <h2 className="mb-6 text-center">
                        <span className="text-gradient">Proyectos</span>
                    </h2>
                    <p className="mb-6 text-center opacity-70 max-w-2xl mx-auto">Proyectos reales que combinan tecnología, diseño y propósito</p>
                </div>

                <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent className="flex align-center">
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="flex items-center">
                                <Card className="mx-2 px-2 flex flex-col shadow-md h-fit">
                                    <div className="relative aspect-video mx-2">
                                        <Image
                                            src={project.image || '/default-image.png'}
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-t-sm"
                                        />
                                    </div>
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-lg">{project.title}</CardTitle>
                                        <CardDescription className="text-sm">{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 py-0">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, id) => (
                                                <span key={id} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-4 pb-0 flex gap-2">
                                        {project.link && (
                                            <Button asChild variant="outline" size="sm" className="flex-1">
                                                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="mr-2 h-3 w-3" />
                                                    <span className="text-xs">Ver Proyecto</span>
                                                </Link>
                                            </Button>
                                        )}
                                        {project.github && (
                                            <Button asChild variant="outline" size="sm" className="flex-1">
                                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="mr-2 h-3 w-3" />
                                                    <span className="text-xs">Código</span>
                                                </Link>
                                            </Button>
                                        )}
                                    </CardFooter>
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
