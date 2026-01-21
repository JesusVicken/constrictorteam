'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, ZoomIn, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// --- LISTA DE IMAGENS ---
const flyers = [
    {
        id: 1,
        src: '/galeria/avisos/aviso1.jpeg',
        alt: 'Aviso Importante 1'
    },
    {
        id: 2,
        src: '/galeria/avisos/aviso2.jpeg',
        alt: 'Aviso Importante'
    },
    {
        id: 3,
        src: '/galeria/avisos/aviso3.jpeg',
        alt: 'Aviso Importante 2'
    },
]

export default function AvisosPage() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    // Bloquear o scroll da página quando uma imagem estiver aberta
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [selectedId])

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-x-hidden">

            {/* --- BACKGROUND PERSONALIZADO --- */}
            <div className="fixed inset-0 -z-10">
                {/* Imagem de Fundo */}
                <Image
                    src="/backg.png"
                    alt="Background Texture"
                    fill
                    className="object-cover opacity-30"
                    priority
                    quality={90}
                />
                {/* Gradiente Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black" />
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl relative z-10">

                {/* --- HEADER COM LOGO --- */}
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-16">

                    {/* Botão Voltar */}
                    <Link
                        href="/"
                        className="self-start md:self-center group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full border border-zinc-800/50 hover:border-zinc-700 bg-black/40 backdrop-blur-md"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Voltar ao Início</span>
                    </Link>

                    {/* Título + Logo */}
                    <div className="flex items-center gap-4 self-end md:self-center">
                        <div className="text-right">
                            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-white">
                                Mural de <span className="text-zinc-500">Avisos</span>
                            </h1>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mt-1">
                                Constrictor Team
                            </p>
                        </div>

                        {/* Logo da Equipe
                        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-zinc-800 shadow-lg bg-black">
                            <Image
                                src="/constrictor-team.jpg"
                                alt="Logo Constrictor Team"
                                fill
                                className="object-cover"
                            />
                        </div> */}
                    </div>
                </div>

                {/* --- GRID DE IMAGENS --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {flyers.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={`card-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            // ALTERAÇÃO AQUI: aspect-[2/3] corresponde exatamente a 1024x1536
                            className="group relative cursor-zoom-in aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl hover:shadow-white/5 transition-all"
                        >
                            {/* Imagem */}
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Overlay Hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20">
                                    <ZoomIn size={24} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- LIGHTBOX (MODAL) --- */}
                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">

                            {/* Backdrop Escuro */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
                            />

                            {/* Container da Imagem */}
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="relative w-full max-w-4xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Botão Fechar */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/10"
                                >
                                    <X size={24} />
                                </button>

                                {/* Imagem Full */}
                                <div className="relative w-full h-[80vh] md:h-[85vh]">
                                    <Image
                                        src={flyers.find(f => f.id === selectedId)?.src || ''}
                                        alt="Aviso Expandido"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Botão Download */}
                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex justify-center">
                                    <a
                                        href={flyers.find(f => f.id === selectedId)?.src}
                                        download
                                        className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-sm font-medium transition-colors border border-white/10 hover:border-white/30"
                                    >
                                        <Download size={16} />
                                        Baixar Imagem
                                    </a>
                                </div>

                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Estado Vazio */}
                {flyers.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
                        <p>Nenhum aviso postado no momento.</p>
                    </div>
                )}

            </div>
        </main>
    )
}