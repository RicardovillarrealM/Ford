import React from 'react';
import { Link } from '@inertiajs/react';
import Hamburger from 'hamburger-react';

type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function Header({ title, children }: Props) {
  return (
    <header className="bg-[#ffffff]">
        <div className="bg-[#060357] flex items-right justify-between px-2 py-1 right">
                <p className="ml-auto text-wrap text-xs text-white">Blvd. Felipe Ángeles 2307, Venta Prieta, 42083 Pachuca de Soto, Hgo. Mexico</p>
            </div>
            <div className="bg-white shadow mt-6 mg-top-4">
            

        </div>
    </header>
  );
}
