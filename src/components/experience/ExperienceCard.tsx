import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

type ExperienceEntry = {
    id: string;
    category: string;
    title: string;
    institution: string;
    description: string;
    stack: string[];
};

interface ExperienceCardProps {
    experience: ExperienceEntry;
    onClose?: () => void;
    modal: boolean;
}

const ExperienceCard = ({ experience, onClose, modal }: ExperienceCardProps) => {
    return (
        <Card className="w-full max-w-2xl relative">
            {modal && (
                <button
                    onClick={onClose}
                    className="absolute right-2 top-2 p-1 rounded-full hover:bg-foreground/5 transition-all duration-300"
                    aria-label="Cerrar"
                >
                    <X className="h-5 w-5" />
                </button>
            )}

            <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{experience.category}</div>
                <CardTitle className="text-2xl">{experience.title}</CardTitle>
                <p className="text-lg font-medium text-muted-foreground">{experience.institution}</p>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="prose prose-slate dark:prose-invert">
                    <p>{experience.description}</p>
                </div>

                <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Habilidades y tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                        {experience.stack?.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-sm rounded-full bg-secondary text-card">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ExperienceCard;
