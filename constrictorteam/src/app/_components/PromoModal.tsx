

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
                    href="https://chat.whatsapp.com/EdqlulmAqXs30J6rawjA9I?s=cl&p=i&mlu=4"
                    target="_blank"
                    rel="noopener noreferrer"
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
                        <h2 className="text-xl md:text-3xl font-black text-white uppercase leading-tight mb-2 drop-shadow-lg">
                            Camisas<br />Oficiais
                        </h2>
                        <p className="text-gray-300 text-xs md:text-sm font-medium mb-4 leading-relaxed hidden sm:block">
                            Garanta a sua e fortaleça a identidade da nossa equipe! Entre no grupo exclusivo de encomendas para conferir modelos e valores.
                        </p>
                        <div className="flex items-center gap-3 mt-auto md:mt-0">
                            <span className="bg-yellow-500 text-black font-bold px-4 md:px-6 py-2.5 md:py-3 rounded-full uppercase tracking-wider text-xs group-hover:bg-white transition-all duration-300 shadow-lg whitespace-nowrap flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                Acessar Grupo
                            </span>
                        </div>
                    </div>
                </Link>



            </div>
        </div>
    )
}