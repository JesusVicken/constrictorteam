'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import PromoModal from './PromoModal'

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
    const [isIOS, setIsIOS] = useState(false)

    useEffect(() => {
        // Detecta iOS (iPhone/iPad) para ajuste do Parallax
        if (typeof window !== 'undefined') {
            const ua = window.navigator.userAgent
            const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
            setIsIOS(iOS)
        }
    }, [])

    return (
        <main className="w-full text-white overflow-hidden bg-black relative">

            {/* --- COMPONENTE DO BANNER PROMOCIONAL --- */}
            {/* Ele gerencia sua própria lógica de exibição */}
            <PromoModal />


            {/* PARALLAX 1: VÍDEO DE FUNDO */}
            <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
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
                            className="drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] brightness-110"
                        />
                        <div className="w-24 h-[2px] bg-white mx-auto mt-4 opacity-60"></div>
                    </div>
                </div>
            </section>

            {/* PARALLAX 2 */}
            <section
                className={`${isIOS ? 'relative h-[85vh]' : 'relative h-[85vh] bg-fixed'} flex items-center justify-center bg-cover bg-center`}
                style={{ backgroundImage: 'url(/ataide.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center max-w-2xl px-6" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide uppercase">Um Legado de Excelência</h2>
                    <p className="text-lg opacity-90 leading-relaxed text-gray-200">
                        <strong>Mestre Ataíde Ludgero Jr.</strong> — Fundador e líder da Constrictor Team, é faixa preta 6º grau de Jiu-Jitsu.
                    </p>
                </div>
            </section>

            {/* SEÇÃO 3 */}
            <section className="py-24 bg-[#111] text-gray-100 text-center px-6">
                <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold uppercase tracking-widest text-white">Transformando vidas</h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        No Constrictor Team – Instituto Vida Suave, acreditamos que o Jiu-Jitsu é uma filosofia de vida.
                    </p>
                </div>
            </section>

            {/* PARALLAX 3 */}
            <section
                className={`${isIOS ? 'relative h-[85vh]' : 'relative h-[85vh] bg-fixed'} flex items-center justify-center bg-cover bg-center`}
                style={{ backgroundImage: 'url(/backg.png)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center max-w-2xl px-6" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">Projeto Social</h2>
                    <p className="text-lg opacity-90 leading-relaxed text-gray-200">
                        Nossa missão é transformar vidas através do Jiu-Jitsu.
                    </p>
                </div>
            </section>

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