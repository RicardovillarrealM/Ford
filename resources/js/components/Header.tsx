import { Link } from '@inertiajs/react';
import React from 'react';
import IconoHamburger from './IconoHamburger';
type Props = {
    title?: string;
    children?: React.ReactNode;
};

export default function Header({ title, children }: Props) {
    return (
        <header>

            <div className="items-right right flex justify-between bg-[#060357] px-2 py-1">
                <p className="ml-auto text-xs text-wrap text-white">
                    Blvd. Felipe Ángeles 2307, Venta Prieta, 42083 Pachuca de
                    Soto, Hgo. Mexico
                </p>
            </div>

            {/*Parte blanca del Header */}
            <div className="bg-white shadow-md">
                {/* CSS grid para dividir la parte blanca del header */}
                <div className="mx-auto grid h-24 max-w-7xl grid-rows-2 px-4 md:h-28 lg:h-32">

                    {/* Top header */}
                    <div className="row-start-1 flex items-start">
                        {/* Logo boton en la parte superior izquierda */}
                        <div className="flex items-center">
                            <Link href="#" className="inline-block">
                                <img
                                    src="/assets/images/logoFord.jpg"
                                    alt="Ford logo"
                                    className="h-10 w-auto object-contain"
                                />
                            </Link>
                        </div>
                        {/* Texto al costado del logo */}
                        <div className="ml-auto flex items-start">
                            <span className="text-sm text-[#060357]">
                                {' '}
                                GRANDES PROMOCIONES Y LAS MEJORES
                                REFACCIONES{' '}
                            </span>
                        </div>
                    </div>

                    {/*Bottom header */}
                    <div className="row-start-2 flex items-center">
                      {/* Boton menu - Hamburger  */}
                      <IconoHamburger />

                    </div>
                </div>
            </div>
        </header>
    );
}
