'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // WhatsApp
    const whatsappNumber = '5561991627171'
    const whatsappMessage = encodeURIComponent(
        'Olá! Vim pelo site e gostaria de mais informações.'
    )
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    // Bloqueia o scroll do corpo quando o menu mobile está aberto
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    // Permite fechar com a tecla ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMobileMenuOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const menuItems = [
        { name: 'Início', href: '/' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Projetos Sociais', href: '/projetos' },
        { name: 'Horários', href: '/grade' },
        { name: 'Graduação', href: '/graduacao' },
        { name: 'Seminários', href: '/seminario' },
        { name: 'Galeria', href: '/galeria' },
        { name: 'Loja', href: '/kimonos' },
        { name: 'Avisos', href: '/avisos' },
        { name: 'Nosso CT', href: '/encontre' },
    ]

    return (
        <>
            <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-black shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all">
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-[72px] md:h-[96px] flex items-center justify-between">

                    {/* LOGO */}
                    <Link
                        href="/"
                        className="flex items-center cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div className="relative h-10 w-36 md:h-20 md:w-64">
                            <Image
                                src="/logo.png"
                                alt="Constrictor Team"
                                fill
                                priority
                                sizes="(max-width: 768px) 144px, 256px"
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* MENU DESKTOP */}
                    <nav className="hidden lg:flex items-center gap-1 ml-auto">
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <Button
                                    variant="ghost"
                                    className="
                      cursor-pointer
                      text-sm font-semibold
                      text-black
                      hover:bg-black hover:text-white
                      transition-all
                    "
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}

                        {/* WHATSAPP */}
                        <Link href={whatsappLink} target="_blank" className="ml-4">
                            <Button
                                className="
                    cursor-pointer
                    bg-black text-white
                    hover:bg-white hover:text-black
                    border border-black
                    rounded-full px-6
                    shadow-[0_6px_20px_rgba(0,0,0,0.5)]
                    transition-all
                  "
                            >
                                <MessageCircle className="size-4 mr-1" />
                                Contato
                            </Button>
                        </Link>
                    </nav>

                    {/* BOTÃO HAMBÚRGUER (TOPBAR) */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Abrir Menu"
                            className="flex items-center justify-center p-2 text-black hover:bg-black/5 rounded-xl transition-all cursor-pointer focus:outline-none"
                        >
                            <Menu className="size-8 text-black" />
                        </button>
                    </div>
                </div>
            </header>

            {/* OVERLAY TELA CHEIA DO MENU MOBILE */}
            <div
                className={`
                    fixed inset-0 z-[100] lg:hidden bg-white
                    flex flex-col justify-between
                    transition-all duration-300 ease-in-out
                    ${mobileMenuOpen ? 'opacity-100 visible pointer-events-auto translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-2'}
                `}
            >
                {/* CABEÇALHO DO MENU COM BOTÃO X DE FECHAR DEDICADO */}
                <div className="h-[72px] px-4 md:px-6 flex items-center justify-between border-b border-black/10 shrink-0 bg-white">
                    <Link
                        href="/"
                        className="flex items-center cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div className="relative h-10 w-36">
                            <Image
                                src="/logo.png"
                                alt="Constrictor Team"
                                fill
                                priority
                                sizes="144px"
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* BOTÃO X DESTACADO E GRANDE (48x48px) */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Fechar Menu"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-zinc-800 active:scale-95 transition-all shadow-md cursor-pointer focus:outline-none"
                    >
                        <X className="size-7 stroke-[2.5]" />
                    </button>
                </div>

                {/* LISTA DE NAVEGAÇÃO MOBILE */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    <nav className="flex flex-col gap-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="cursor-pointer"
                            >
                                <div
                                    className="
                                        flex items-center justify-between
                                        py-3.5 border-b border-black/10
                                        text-lg font-semibold
                                        text-black
                                        hover:bg-black hover:text-white px-3 rounded-lg
                                        transition-all active:bg-black active:text-white
                                    "
                                >
                                    {item.name}
                                    <span className="opacity-40 text-sm">→</span>
                                </div>
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-8 mb-6">
                        <Link
                            href={whatsappLink}
                            target="_blank"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Button
                                className="
                                    cursor-pointer
                                    w-full h-14 text-lg font-bold
                                    bg-black text-white
                                    hover:bg-white hover:text-black
                                    border border-black
                                    rounded-xl
                                    shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                                    transition-all
                                "
                            >
                                <MessageCircle className="size-5 mr-2" />
                                Falar no WhatsApp
                            </Button>
                        </Link>

                        <p className="text-center text-xs text-black/50 mt-4">
                            Constrictor Team • Jiu-Jitsu & Disciplina
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
