

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PromoModal() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasSeenModal = sessionStorage.getItem('hasSeenUniformsModal')

            if (!hasSeenModal) {
                const timer = setTimeout(() => {
                    setShowModal(true)
                }, 1000)
                return () => clearTimeout(timer)
            }
        }
    }, [])

    const handleCloseModal = () => {
        setShowModal(false)
        sessionStorage.setItem('hasSeenUniformsModal', 'true')
    }

    if (!showModal) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-6 md:p-12">

            {/* Backdrop com Blur Profundo */}
            <div
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-700 animate-in fade-in"
            ></div>

            {/* Container Principal do Modal */}
            <div className="relative w-full sm:max-w-6xl h-[75vh] sm:h-[85vh] md:h-[80vh] flex flex-col md:flex-row bg-zinc-950 rounded-t-[2rem] sm:rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden border border-white/10 animate-in slide-in-from-bottom sm:zoom-in-95 duration-500">

                {/* Botão Fechar - Flutuante */}
                <button
                    onClick={handleCloseModal}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-[60] bg-black/60 hover:bg-yellow-500 backdrop-blur-md text-white hover:text-black w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-300 shadow-2xl group/btn border border-white/10 hover:border-transparent"
                    aria-label="Fechar"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6 group-hover/btn:rotate-90 transition-transform duration-300"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none hidden md:flex flex-col items-center">
                    <div className="bg-yellow-500 text-black font-black italic uppercase px-6 py-2 rounded-full shadow-2xl transform -rotate-3 border-4 border-zinc-950 tracking-widest whitespace-nowrap">
                        LANÇAMENTO
                    </div>
                </div>

                <Link
                    href="/kimonos"
                    className="relative w-full h-full group flex flex-col overflow-hidden"
                >
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/uniforme/novacolecao.jpeg"
                            alt="Nova Coleção"
                            fill
                            className="object-cover object-top md:object-center transition-transform duration-700 group-hover:scale-105"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Conteúdo do Texto forçado para cima da imagem (z-20) */}
                    <div className="relative z-20 flex-1 flex flex-col p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent justify-end">
                        <span className="text-yellow-500 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-1 drop-shadow-md">
                            Até 05/07/2026
                        </span>
                        <h2 className="text-lg sm:text-xl md:text-3xl font-black text-white uppercase leading-tight mb-2 drop-shadow-lg">
                            Camisas<br />Oficiais
                        </h2>
                        <p className="text-gray-300 text-xs md:text-sm font-medium mb-4 leading-relaxed hidden sm:block">
                            Garanta a sua e fortaleça a identidade da nossa equipe! Entre no grupo exclusivo de encomendas para conferir modelos e valores.
                        </p>
                        <div className="flex items-center gap-3 mt-auto md:mt-0">
                            <span className="bg-yellow-500 text-black font-bold px-4 md:px-6 py-2.5 md:py-3 rounded-full uppercase tracking-wider text-xs group-hover:bg-white transition-all duration-300 shadow-lg whitespace-nowrap flex items-center gap-2">
                                Ver Coleção
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </span>
                        </div>
                    </div>
                </Link>



            </div>
        </div>
    )
}