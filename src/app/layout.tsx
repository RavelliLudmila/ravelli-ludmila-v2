import type { Metadata } from 'next';
import { Great_Vibes, Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const greatVibes = Great_Vibes({
    weight: '400',
    variable: '--font-signature',
    subsets: ['latin'],
    display: 'swap',
});

const playfairDisplay = Playfair_Display({
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
});

const dmSans = DM_Sans({
    variable: '--font-body',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Ravelli Ludmila',
    description:
        'Desarrollo experiencias digitales donde el código se encuentra con el diseño. Frontend Developer especializada en React, Next.js y UX/UI.',
    keywords: [
        'Ludmila Ravelli',
        'Frontend Developer',
        'Next.js',
        'React',
        'TypeScript',
        'TailwindCSS',
        'shadcn/ui',
        'UX/UI Designer',
        'Argentina',
        'Portfolio',
    ],
    authors: [{ name: 'Ludmila Ravelli', url: 'https://www.ravelliludmila.com.ar' }],
    openGraph: {
        title: 'Ludmila Ravelli | Desarrolladora Frontend',
        description:
            'Portfolio de Ludmila Ravelli, desarrolladora frontend argentina especializada en Next.js, React y diseño de interfaces modernas.',
        url: 'https://www.ravelliludmila.com.ar',
        siteName: 'Ludmila Ravelli',
        locale: 'es_AR',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${greatVibes.variable} ${playfairDisplay.variable} ${dmSans.variable} font-body antialiased`}>
                <ThemeProvider defaultTheme="system" storageKey="ludmila-theme">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
