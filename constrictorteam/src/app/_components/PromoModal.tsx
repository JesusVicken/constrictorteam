

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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12">

            {/* Backdrop com Blur Profundo */}
            <div
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-700 animate-in fade-in"
            ></div>

            {/* Container Principal do Modal */}
            <div className="relative w-full max-w-6xl h-[85vh] md:h-[80vh] flex flex-col md:flex-row bg-zinc-950 rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden border border-white/10 animate-in zoom-in-95 duration-500">

                {/* Botão Fechar - Flutuante */}
                <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] bg-black/40 hover:bg-yellow-500 backdrop-blur-md text-white hover:text-black w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 shadow-2xl group/btn border border-white/10 hover:border-transparent"
                    aria-label="Fechar"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:rotate-90 transition-transform duration-300"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none hidden md:flex flex-col items-center">
                    <div className="bg-yellow-500 text-black font-black italic uppercase px-6 py-2 rounded-full shadow-2xl transform -rotate-3 border-4 border-zinc-950 tracking-widest whitespace-nowrap">
                        Última Chamada
                    </div>
                </div>

                <Link
                    href="/avisos"
                    className="relative w-full h-1/2 md:w-1/2 md:h-full group flex flex-col overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
                >
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/aviso4.jpeg"
                            alt="Kimono Old School Ataíde Jr"
                            fill
                            className="object-cover object-top md:object-center transition-transform duration-700 group-hover:scale-105"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Conteúdo do Texto forçado para cima da imagem (z-20) */}
                    <div className="relative z-20 flex-1 flex flex-col justify-end p-6 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 h-full">
                        <span className="text-yellow-500 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 drop-shadow-md">
                            Edição Limitada
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight mb-4 drop-shadow-lg">
                            Kimono<br />Old School
                        </h2>
                        <div className="flex items-center gap-3 mt-auto md:mt-0">
                            <span className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold px-6 py-3 rounded-full uppercase tracking-wider text-xs md:text-sm group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-500 transition-all duration-300 shadow-lg">
                                Ver Detalhes
                            </span>
                        </div>
                    </div>
                </Link>

                <Link
                    href="/avisos"
                    className="relative w-full h-1/2 md:w-1/2 md:h-full group flex flex-col overflow-hidden"
                >
                    {/* CONTAINER DA IMAGEM ISOLADO */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/aviso5.jpeg"
                            alt="Rash Guard Old School Ataíde Jr"
                            fill
                            className="object-cover object-top md:object-center transition-transform duration-700 group-hover:scale-105"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Conteúdo do Texto forçado para cima da imagem (z-20) */}
                    <div className="relative z-20 flex-1 flex flex-col justify-end p-6 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 h-full">
                        <span className="text-yellow-500 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 drop-shadow-md">
                            Produção Exclusiva
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight mb-4 drop-shadow-lg">
                            Rash Guard<br />Old School
                        </h2>
                        <div className="flex items-center gap-3 mt-auto md:mt-0">
                            <span className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold px-6 py-3 rounded-full uppercase tracking-wider text-xs md:text-sm group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-500 transition-all duration-300 shadow-lg">
                                Ver Detalhes
                            </span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}