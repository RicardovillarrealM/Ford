import { Link } from '@inertiajs/react';
import React from 'react';
import logoFord from '../../assets/images/logoFord.jpg';
import IconoHamburger from './IconoHamburger';
import UserMenu from './UserMenu';
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishListContext";
import SearchBar from './SearchBar';
import { Heart, ShoppingCart } from 'lucide-react';

//Tailwind clases reusables

export const NAV_LINK = "text-white text-base font-semibold hover:text-artra-lighter-blue transition-colors" as const;
export const ICON_BUTTON = "p-2 flex items-center justify-center rounded-lg bg-white hover:bg-gray-100 transition-colors relative" as const;
export const BADGE_COUNT = "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center" as const;
export const ICON_NAVY_24 = "w-6 h-6 text-artra-navy" as const;
export const INLINE_ROW_TIGHT = "flex items-center gap-1 mt-0" as const;
export const SMALL_WHITE_LABEL = "text-white text-[12px] font-semibold" as const;

export const HeaderClasses = {
    NAV_LINK,
    ICON_BUTTON,
    BADGE_COUNT,
    ICON_NAVY_24,
    INLINE_ROW_TIGHT,
    SMALL_WHITE_LABEL,
} as const;
// (icons imported above)
type Props = {
    title?: string;
    children?: React.ReactNode;
};

export default function Header({ title, children }: Props) {
    // Load cart and wishlist from context so we can show counts.
    // Use `any` and fallback keys to be resilient during development while contexts stabilize.
    // Replace with proper typed destructuring when your contexts expose explicit keys.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cartCtx: any = useCart();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wishlistCtx: any = useWishlist();
    const cartItems = cartCtx?.cartItems ?? cartCtx?.items ?? [];
    const wishlistItems = wishlistCtx?.wishlistItems ?? wishlistCtx?.items ?? [];
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
                <div className="grid h-24 max-w-7xl grid-rows-2 px-0 pl-2 md:h-28 lg:h-32">
                    {/* Top header */}
                    <div className="row-start-1 flex items-start">
                        {/* Logo boton en la parte superior izquierda */}
                        <div className="flex items-center space-x-3">
                            <Link href="#" className="inline-block">
                                <img
                                    src={logoFord}
                                    alt="Ford logo"
                                    className="h-10 w-auto object-contain"
                                />
                            </Link>
                            <span className="text-md text-[#060357]">
                                GRANDES PROMOCIONES Y LAS MEJORES REFACCIONES
                            </span>
                        </div>
                    </div>

                    {/*Bottom header */}
                    <div className="row-start-2 ml-2 flex items-start">
                        {/* Boton menu - Hamburger  */}
                        <IconoHamburger />
                        <div className="mb-5 ml-10 flex items-center">
                            <Link
                                href="#"
                                onClick={() => {
                                    console.info('Se agrego un vehiculo');
                                }}
                            >
                                {' '}
                                {/*AQUI TIENE QUE IR EL ICONO DE AUTO */}
                                Agregar Vehiculo
                            </Link>
                        </div>
                        <div className="ml-50 flex items-start space-x-4">
                            <SearchBar />
                        </div>
                        <div className="flex items-center gap-2">
                            {' '}
                            {/* Reducido gap */}
                            {/* Reducido tamaño de botones/iconos */}
                            <Link href="/favoritos" className={ICON_BUTTON}>
                                <Heart className={ICON_NAVY_24} />
                                {wishlistItems.length > 0 && (
                                    <span className={BADGE_COUNT}>
                                        {wishlistItems.length}
                                    </span>
                                )}
                            </Link>
                            <Link href="/carrito" className={ICON_BUTTON}>
                                <ShoppingCart className={ICON_NAVY_24} />
                                {cartItems.length > 0 && (
                                    <span className={BADGE_COUNT}>
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>
                            <UserMenu />{' '}
                            {/* El tamaño del botón UserMenu se define dentro del componente */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
