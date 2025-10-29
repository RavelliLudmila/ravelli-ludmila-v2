import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Ravelli Ludmila',
    description: 'Portfolio de Ludmila Ravelli, desarrolladora frontend argentina especializada en Next.js, React y diseño de interfaces modernas.',
    keywords: ['Ludmila Ravelli', 'Frontend Developer', 'Next.js', 'React', 'TailwindCSS', 'shadcn/ui', 'Argentina', 'Portfolio'],
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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
