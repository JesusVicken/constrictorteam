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

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

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
        <header className="sticky top-0 z-50 w-full transition-all">
            {/* BARRA SUPERIOR (NAVBAR) */}
            <div className="relative z-50 w-full bg-white/95 backdrop-blur-md border-b border-black shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
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
                                <MessageCircle size={18} />
                                Contato
                            </Button>
                        </Link>
                    </nav>

                    {/* BOTÃO MENU MOBILE */}
                    <div className="lg:hidden relative z-50">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Abrir Menu"
                            className="cursor-pointer hover:bg-transparent p-2 focus:outline-none"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-8 w-8 text-black" />
                            ) : (
                                <Menu className="h-8 w-8 text-black" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* MENU MOBILE OVERLAY */}
            <div
                className={`
          fixed inset-0 z-40 lg:hidden
          bg-white flex flex-col justify-between
          h-screen w-screen overflow-y-auto
          pt-28 pb-8 px-6
          transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
        `}
            >
                <nav className="flex flex-col gap-2">
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
                  py-3.5 border-b border-black/15
                  text-lg font-semibold
                  text-black
                  hover:bg-black hover:text-white px-2 rounded-lg
                  transition-all
                "
                            >
                                {item.name}
                                <span className="opacity-40 text-sm">→</span>
                            </div>
                        </Link>
                    ))}
                </nav>

                <div className="mt-8 mb-4">
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
                shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                transition-all
              "
                        >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Falar no WhatsApp
                        </Button>
                    </Link>

                    <p className="text-center text-xs text-black/50 mt-4">
                        Constrictor Team • Jiu-Jitsu & Disciplina
                    </p>
                </div>
            </div>
        </header>
    )
}
