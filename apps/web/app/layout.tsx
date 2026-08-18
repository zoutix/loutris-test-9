import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Loutris — تحدٍّ لغوي تنافسي', description: 'مواجهة كلمات سريعة وتنافسية.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
