import React from 'react';
import { Link } from '@inertiajs/react';

type NavItem = { href: string; label: string };

type Props = {
  items?: NavItem[];
  className?: string;
};

export default function Nav({
  items = [
    { href: '/', label: 'Inicio' },
    { href: '/explore', label: 'Explorar' },
    { href: '/contact', label: 'Contacto' },
  ],
  className = '',
}: Props) {
  return (
    <nav className={className} aria-label="Main navigation">
      <ul className="flex space-x-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gray-700 hover:text-gray-900">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
