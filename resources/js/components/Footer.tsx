import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Ford. Todos los derechos reservados.
      </div>
    </footer>
  );
}
