'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [headerVisible, setHeaderVisible] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const lastScrollY = useRef(0)
    const ticking = useRef(false)

    // WhatsApp
    const whatsappNumber = '5561991627171'
    const whatsappMessage = encodeURIComponent(
        'Olá! Vim pelo site e gostaria de mais informações.'
    )
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    // Controle inteligente de visibilidade do header baseado na direção do scroll
    const handleScroll = useCallback(() => {
        if (ticking.current) return
        ticking.current = true

        requestAnimationFrame(() => {
            const currentScrollY = window.scrollY

            // Sempre mostrar no topo da página
            if (currentScrollY < 10) {
                setHeaderVisible(true)
                setScrolled(false)
                lastScrollY.current = currentScrollY
                ticking.current = false
                return
            }

            setScrolled(true)

            // Mostrar ao rolar para cima, esconder ao rolar para baixo
            const delta = currentScrollY - lastScrollY.current
            if (delta < -5) {
                setHeaderVisible(true)
            } else if (delta > 10) {
                setHeaderVisible(false)
            }

            lastScrollY.current = currentScrollY
            ticking.current = false
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    // Garantir que o header fique visível quando o menu mobile estiver aberto
    useEffect(() => {
        if (mobileMenuOpen) {
            setHeaderVisible(true)
        }
    }, [mobileMenuOpen])

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
            {/* ESPAÇADOR para compensar o header fixed */}
            <div className="h-[72px] md:h-[96px] w-full" />

            {/* HEADER FIXO COM SHOW/HIDE INTELIGENTE */}
            <header
                className={`
                    fixed top-0 left-0 right-0 z-[60] w-full
                    transition-all duration-300 ease-in-out
                    ${headerVisible ? 'translate-y-0' : '-translate-y-full'}
                    ${scrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-b border-black/10'
                        : 'bg-white border-b border-black shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
                    }
                `}
            >
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

                    {/* BOTÃO HAMBÚRGUER MOBILE */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Abrir Menu"
                            className="
                                flex items-center justify-center
                                w-11 h-11
                                text-black hover:bg-black/5
                                rounded-xl transition-all
                                cursor-pointer focus:outline-none
                                active:scale-95
                            "
                        >
                            <Menu className="size-7" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ===== MENU MOBILE TELA CHEIA ===== */}
            <div
                className={`
                    fixed inset-0 z-[100] lg:hidden
                    bg-white
                    flex flex-col
                    transition-all duration-300 ease-in-out
                    ${mobileMenuOpen
                        ? 'opacity-100 visible pointer-events-auto'
                        : 'opacity-0 invisible pointer-events-none'
                    }
                `}
            >
                {/* TOPO DO MENU MOBILE — logo + botão fechar */}
                <div className="h-[72px] px-4 flex items-center justify-between border-b border-black/10 shrink-0">
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

                    {/* BOTÃO X — grande, preto, impossível de perder */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Fechar Menu"
                        className="
                            flex items-center justify-center
                            w-12 h-12
                            rounded-full bg-black text-white
                            hover:bg-zinc-800
                            active:scale-90
                            transition-all shadow-lg
                            cursor-pointer focus:outline-none
                        "
                    >
                        <X className="size-7 stroke-[2.5]" />
                    </button>
                </div>

                {/* LINKS DE NAVEGAÇÃO */}
                <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
                    <nav className="flex flex-col">
                        {menuItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="cursor-pointer"
                                style={{
                                    transitionDelay: mobileMenuOpen ? `${index * 40}ms` : '0ms'
                                }}
                            >
                                <div
                                    className={`
                                        flex items-center justify-between
                                        py-3.5 px-3
                                        border-b border-black/8
                                        text-[17px] font-semibold
                                        text-black
                                        rounded-lg
                                        hover:bg-black hover:text-white
                                        active:bg-black active:text-white
                                        transition-all duration-200
                                        ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                                    `}
                                    style={{
                                        transitionDelay: mobileMenuOpen ? `${index * 40}ms` : '0ms'
                                    }}
                                >
                                    {item.name}
                                    <span className="opacity-30 text-sm">→</span>
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* RODAPÉ DO MENU MOBILE */}
                <div className="shrink-0 px-5 pb-6 pt-2 border-t border-black/5">
                    <Link
                        href={whatsappLink}
                        target="_blank"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Button
                            className="
                                cursor-pointer
                                w-full h-14 text-base font-bold
                                bg-black text-white
                                hover:bg-white hover:text-black
                                border border-black
                                rounded-xl
                                shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                                transition-all active:scale-[0.98]
                            "
                        >
                            <MessageCircle className="size-5 mr-2" />
                            Falar no WhatsApp
                        </Button>
                    </Link>

                    <p className="text-center text-xs text-black/40 mt-3">
                        Constrictor Team • Jiu-Jitsu & Disciplina
                    </p>
                </div>
            </div>
        </>
    )
}
