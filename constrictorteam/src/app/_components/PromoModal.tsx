'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PromoModal() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        // Verifica se o código está rodando no navegador
        if (typeof window !== 'undefined') {
            // Verifica se o usuário já viu o modal nesta sessão
            const hasSeenModal = sessionStorage.getItem('hasSeenSeminarModal')

            if (!hasSeenModal) {
                // Se não viu, espera 1.5 segundos e mostra (efeito surpresa suave)
                const timer = setTimeout(() => {
                    setShowModal(true)
                }, 1500)
                return () => clearTimeout(timer)
            }
        }
    }, [])

    const handleCloseModal = () => {
        setShowModal(false)
        sessionStorage.setItem('hasSeenSeminarModal', 'true') // Salva na sessão que já viu
    }

    // Se não for para mostrar, não renderiza nada
    if (!showModal) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

            {/* Fundo Escuro (Backdrop) com Blur */}
            <div
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 animate-in fade-in"
            ></div>

            {/* O Flyer / Conteúdo do Modal */}
            <div className="relative bg-zinc-900 p-2 rounded-2xl shadow-2xl max-w-sm md:max-w-md w-full animate-in zoom-in-95 duration-300 border border-white/10">

                {/* Botão Fechar (X) */}
                <button
                    onClick={handleCloseModal}
                    className="absolute -top-4 -right-4 bg-yellow-500 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors z-20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>

                {/* Link para a página do seminário */}
                <Link href="/seminario" className="block relative group overflow-hidden rounded-xl">
                    <Image
                        src="/seminarioKim.jpg"
                        alt="Seminário Kim Ludgero"
                        width={1024}
                        height={1365}
                        className="w-full h-auto object-cover"
                        priority // Carrega rápido pois é prioridade
                    />

                    {/* Efeito Hover (Call to Action) */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-full uppercase tracking-widest transform scale-90 group-hover:scale-100 transition-transform shadow-xl">
                            Ver Detalhes
                        </span>
                    </div>
                </Link>

                {/* Texto de apoio inferior */}
                <div className="text-center pt-3 pb-1">
                    <p className="text-gray-400 text-[10px] uppercase tracking-wider">Clique na imagem para garantir sua vaga</p>
                </div>
            </div>
        </div>
    )
}