'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="w-full h-[72px] bg-white shadow-md sticky top-0 z-50 overflow-visible backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-full">
                {/* Logo com recorte e centralização */}
                <Link href="/" className="flex items-center h-full overflow-hidden">
                    <div className="flex items-center h-full">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={200}
                            height={100}
                            className="h-18 w-auto object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex gap-6 items-center ml-6">
                    <Link href="/">
                        <Button variant="ghost" className="text-base">
                            Início
                        </Button>
                    </Link>
                    <Link href="/sobre">
                        <Button variant="ghost" className="text-base">
                            Sobre
                        </Button>
                    </Link>
                    <Link href="/projetos">
                        <Button variant="ghost" className="text-base">
                            Horários
                        </Button>
                    </Link>
                    <Link href="/graduacao">
                        <Button variant="ghost" className="text-base">
                            Graduação 2025
                        </Button>
                    </Link>
                    <Link href="/contato">
                        <Button variant="ghost" className="text-base">
                            Contato
                        </Button>
                    </Link>
                    <Link href="/encontre">
                        <Button variant="ghost" className="text-base">
                            Nosso CT
                        </Button>
                    </Link>
                </nav>

                {/* Ícone do Menu Mobile */}
                <div className="md:hidden flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Menu Mobile animado - SEÇÃO ATUALIZADA */}
            <nav
                className={`md:hidden bg-background/90 backdrop-blur border-t border-gray-200 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
    ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            className="w-full justify-center text-base" // <-- Alterado de justify-start
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Início
                        </Button>
                    </Link>
                    <Link href="/sobre">
                        <Button
                            variant="ghost"
                            className="w-full justify-center text-base" // <-- Alterado de justify-start
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Sobre
                        </Button>
                    </Link>
                    <Link href="/projetos">
                        <Button
                            variant="ghost"
                            className="w-full justify-center text-base" // <-- Alterado de justify-start
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Horário
                        </Button>
                    </Link>
                    <Link href="/graduacao">
                        <Button
                            variant="ghost"
                            className="w-full justify-center text-base" // <-- Alterado de justify-start
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Graduação 2025
                        </Button>
                    </Link>
                    <Link href="/contato">
                        <Button
                            variant="ghost"
                            className="w-full justify-center text-base" // <-- Alterado de justify-start
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contato
                        </Button>
                    </Link>
                    <Link href="/encontre">
                        <Button
                            variant="ghost"
                            className="w-full justify-center text-base h-auto py-2 text-center" // <-- Alterado de justify-start e text-left
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Nosso CT
                        </Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}