'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import PromoModal from './PromoModal'

import ParallaxSection from './ParallaxSection'

const carouselImages = [
    '/uniforme/novacolecao.jpeg',
    '/uniforme/colecao1.jpeg',
    '/uniforme/colecao2.jpeg',
    '/uniforme/colecao3.jpeg',
    '/uniforme/rash/rash1.jpeg',
    '/uniforme/rash/rash2.jpeg',
    '/uniforme/colecao5.jpeg',
    '/uniforme/colecao9.jpeg'
]

export default function Hero() {
    return (
        <main className="w-full text-white overflow-hidden bg-black relative">

            {/* --- COMPONENTE DO BANNER PROMOCIONAL --- */}
            {/* Ele gerencia sua própria lógica de exibição */}
            <PromoModal />

            {/* PARALLAX 1: VÍDEO DE FUNDO */}
            <section className="relative min-h-[100dvh] h-[100dvh] flex items-center justify-center text-center overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover scale-105"
                    src="/cobra.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
                <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
                    <div data-aos="fade-down">
                        <Image
                            src="/logo.png"
                            alt="Constrictor Team"
                            width={400}
                            height={130}
                            priority
                            className="drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] brightness-110 max-w-[280px] sm:max-w-[400px] h-auto"
                        />
                        <div className="w-24 h-[2px] bg-white mx-auto mt-4 opacity-60"></div>
                    </div>
                </div>
            </section>

            {/* PARALLAX 2: UM LEGADO DE EXCELÊNCIA */}
            <ParallaxSection
                bgImage="/ataide.jpg"
                title="Um Legado de Excelência"
                subtitle={
                    <p>
                        <strong>Mestre Ataíde Ludgero Jr.</strong> — Fundador e líder da Constrictor Team, é faixa preta 6º grau de Jiu-Jitsu.
                    </p>
                }
            />

            {/* SEÇÃO TRANSFORMANDO VIDAS (SEM PARALLAX - FOTO COMPLETA + REDIRECT) */}
            <section className="relative py-20 bg-black text-white px-4 sm:px-6 overflow-hidden border-t border-white/10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16" data-aos="fade-up">
                    {/* Imagem Completa Sem Corte */}
                    <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 group">
                        <Image
                            src="/projeto1.jpeg"
                            alt="Transformando Vidas — Projeto Social"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain hover:scale-102 transition-transform duration-500"
                            priority
                        />
                    </div>

                    {/* Conteúdo & Redirect para Projetos Sociais */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-widest text-yellow-400">
                            Instituto Vida Suave
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                            Transformando Vidas
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            No <strong>Constrictor Team – Instituto Vida Suave</strong>, acreditamos que o Jiu-Jitsu é uma filosofia de vida capaz de formar cidadãos, resgatar a auto-estima e construir caminhos de esperança e disciplina.
                        </p>
                        <div className="pt-2 flex justify-center lg:justify-start">
                            <Link
                                href="/projetos"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-wider rounded-xl hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            >
                                <span>Ver Projetos Sociais</span>
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARALLAX 4: PROJETO SOCIAL */}
            <ParallaxSection
                bgImage="/backg.png"
                title="Projeto Social"
                subtitle={
                    <p>
                        Nossa missão é transformar vidas através do Jiu-Jitsu.
                    </p>
                }
            />

            {/* FOTO CONSTRICTOR */}
            <section className="py-8 bg-black text-white text-center px-6">
                <div className="max-w-4xl mx-auto" data-aos="fade-up">
                    <div className="relative rounded-lg overflow-hidden shadow-2xl">
                        <Image src="/constrictor.webp" alt="Constrictor Team" width={1179} height={719} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* PARALLAX 4: LOJA OFICIAL (CARROSSEL INFINITO) */}
            <section className="relative w-full py-20 overflow-hidden bg-black border-t border-white/10">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black pointer-events-none z-0"></div>
                
                <div className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center mb-12" data-aos="fade-up">
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4">Loja Oficial</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-6 text-center">
                        Vista a Nossa Armadura
                    </h2>
                    <p className="text-gray-400 text-lg text-center max-w-2xl">
                        Kimonos exclusivos, linhas de Rash Guard e edições limitadas. Represente a Constrictor Team no tatame e no dia a dia.
                    </p>
                </div>

                {/* Marquee Carousel Container */}
                <div className="relative w-full overflow-hidden flex z-10 py-4 group">
                    <div className="flex w-max animate-marquee space-x-4">
                        {/* Repeat images array twice to create seamless loop */}
                        {[...carouselImages, ...carouselImages].map((img, i) => (
                            <div key={i} className="relative w-[280px] h-[350px] shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 transition-all duration-300 group-hover:opacity-60 hover:!opacity-100">
                                <Image src={img} alt="Uniforme Constrictor" fill className="object-cover object-top" sizes="280px" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 mt-12 flex justify-center" data-aos="fade-up">
                    <Link href="/kimonos" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <ShoppingBag size={22} />
                        Acessar a Loja
                    </Link>
                </div>

                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                    .group:hover .animate-marquee {
                        animation-play-state: paused;
                    }
                `}} />
            </section>
        </main>
    )
}