import ExperienceCard from "./ExperienceCard";

type ExperienceEntry = {
    id: string;
    category: string;
    title: string;
    institution: string;
    description: string;
    stack: string[];
};

interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
    experience: ExperienceEntry;
}

export function ExperienceModal({ isOpen, onClose, experience }: ExperienceModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-white/80 dark:bg-black/80">
            <ExperienceCard experience={experience} onClose={onClose} modal={true} />
        </div>
    );
}
