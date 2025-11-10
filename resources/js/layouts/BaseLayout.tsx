import React from 'react';
import { Head } from '@inertiajs/react';
import { Header, Nav, Footer } from '@/components';

type Props = {
  title?: string;
  children: React.ReactNode;
  showNav?: boolean;
  className?: string;
};

export default function BaseLayout({
  title,
  children,
  showNav = true,
  className = '',
}: Props) {
  return (
    <>
      <Head title={title ?? 'Ford'} />

      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header title={title}>{showNav && <Nav />}</Header>

        <main className={`flex-1 mx-auto w-full max-w-7xl px-4 py-6 ${className}`}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
