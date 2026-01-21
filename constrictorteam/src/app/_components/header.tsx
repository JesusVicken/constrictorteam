
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Configuração do WhatsApp
    const whatsappNumber = "5561991627171"
    const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.")
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    return (
        // MUDANÇA 1: Adicionei 'md:h-[90px]' para o cabeçalho ficar mais alto no desktop
        <header className="w-full h-[72px] md:h-[90px] bg-white/80 shadow-sm sticky top-0 z-50 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-full">

                <Link href="/" className="flex items-center h-full z-50">
                    {/* MUDANÇA 2: Aumentei significativamente as dimensões no 'md:' */}
                    {/* Mobile: h-10 w-36 | Desktop: h-20 w-64 */}
                    <div className="relative h-10 w-36 md:h-20 md:w-64 transition-all duration-300">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain object-left"
                            priority
                            sizes="(max-width: 768px) 144px, 256px"
                        />
                    </div>
                </Link>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex gap-1 items-center ml-auto">
                    {[
                        { name: 'Início', href: '/' },
                        { name: 'Sobre', href: '/sobre' },
                        { name: 'Horários', href: '/grade' },
                        { name: 'Graduação', href: '/graduacao' },
                        { name: 'Seminários', href: '/seminario' },
                        { name: 'Galeria', href: '/galeria' },
                        { name: 'Avisos', href: '/avisos' },
                        { name: 'Nosso CT', href: '/encontre' },
                    ].map((item) => (
                        <Link key={item.name} href={item.href}>
                            <Button variant="ghost" className="text-sm font-medium hover:bg-gray-100/50">
                                {item.name}
                            </Button>
                        </Link>
                    ))}

                    {/* Botão WhatsApp Desktop */}
                    <Link href={whatsappLink} target="_blank" className="ml-4">
                        <Button className="bg-green-600 hover:bg-green-700 text-white gap-2 rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                            <MessageCircle size={18} />
                            Contato
                        </Button>
                    </Link>
                </nav>

                {/* Ícone do Menu Mobile */}
                <div className="md:hidden flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative z-50 hover:bg-transparent"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-gray-900" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-900" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Menu Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ease-in-out flex flex-col pt-[80px] px-6
                ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'}`}
                style={{ top: 0, height: '100dvh' }}
            >
                <div className="flex flex-col gap-4 h-full">
                    <nav className="flex flex-col gap-2 mt-4">
                        {[
                            { name: 'Início', href: '/' },
                            { name: 'Sobre', href: '/sobre' },
                            { name: 'Horários', href: '/grade' },
                            { name: 'Graduação 2025', href: '/graduacao' },
                            { name: 'Galeria', href: '/galeria' },
                            { name: 'Contato', href: '/contato' },
                            { name: 'Avisos', href: '/avisos' },
                            { name: 'Nosso CT', href: '/encontre' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full"
                            >
                                <div className="group flex items-center justify-between py-3 border-b border-gray-100 hover:border-gray-300 transition-colors">
                                    <span className="text-lg font-medium text-gray-800 group-hover:text-black">
                                        {item.name}
                                    </span>
                                    <span className="text-gray-300 group-hover:text-gray-500 transition-colors">→</span>
                                </div>
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto mb-10 w-full">
                        <Link href={whatsappLink} target="_blank" onClick={() => setMobileMenuOpen(false)}>
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg font-semibold rounded-xl shadow-lg shadow-green-200 flex items-center justify-center gap-2">
                                <MessageCircle className="h-5 w-5" />
                                Falar no WhatsApp
                            </Button>
                        </Link>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            Estamos aguardando seu contato.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}