import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
            <div className="max-w-md mx-auto">
                <h1 className="text-6xl font-bold text-gradient mb-6">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
                <p className="text-muted-foreground mb-8">¿A dónde querés ir?🤌</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
