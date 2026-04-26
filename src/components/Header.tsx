'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
    { label: 'PROPÓSITO', href: '#proposito' },
    { label: 'AULAS', href: '#aulas' },
    { label: 'OBJETIVOS', href: '#objetivos' },
    { label: 'TIME', href: '#time' },
];

export function Header() {
    const [activeItem, setActiveItem] = useState('PROPÓSITO');

    return (
        <header className="sticky top-0 z-50 w-full bg-background pt-8 pb-6 transition-all duration-300">
            <div className="mx-auto flex max-w-300 items-center justify-between px-6">

                {/* Logo */}
                <div className="shrink-0">
                    <Link href="/" className="text-xl font-black tracking-tighter text-foreground uppercase">
                        Rota Inicial
                    </Link>
                </div>

                {/* Navegação Principal */}
                <nav className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => {
                        const isActive = activeItem === item.label;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveItem(item.label)}
                                className="group relative text-[11px] font-semibold tracking-widest transition-colors duration-300 uppercase"
                            >
                                <span
                                    className={
                                        isActive
                                            ? 'text-foreground'
                                            : 'text-muted group-hover:text-foreground'
                                    }
                                >
                                    {item.label}
                                </span>

                                <span
                                    className={`absolute -bottom-2 left-0 h-px bg-foreground transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Botão de Ação */}
                <div className="shrink-0">
                    <button className="rounded-full bg-foreground px-8 py-3 text-xs font-semibold text-background transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm">
                        Começar
                    </button>
                </div>

            </div>
        </header>
    );
}