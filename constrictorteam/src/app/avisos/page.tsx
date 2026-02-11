'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, ZoomIn } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// --- ÍCONE DO WHATSAPP (SVG Personalizado) ---
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
)

// --- LISTA DE IMAGENS ---
const flyers = [
    {
        id: 4,
        src: '/aviso4.jpeg',
        alt: 'Produção Kimono Old School (Preto)',
        actionLink: 'https://chat.whatsapp.com/FsbYEms1Mhx3lSmpMiBMfS?mode=hqrc'
    },
    {
        id: 5,
        src: '/aviso5.jpeg',
        alt: 'Produção Rash Guard Old School (Preto)',
        actionLink: 'https://chat.whatsapp.com/Fje5TaMn7ZyIM8TuzXP6XM?mode=gi_t'
    },
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

    const selectedFlyer = flyers.find(f => f.id === selectedId)

    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [selectedId])

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-x-hidden">

            {/* --- BACKGROUND --- */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/backg.png"
                    alt="Background Texture"
                    fill
                    className="object-cover opacity-30"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black" />
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl relative z-10">

                {/* --- HEADER --- */}
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-16">
                    <Link
                        href="/"
                        className="self-start md:self-center group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full border border-zinc-800/50 hover:border-zinc-700 bg-black/40 backdrop-blur-md"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Voltar ao Início</span>
                    </Link>

                    <div className="flex items-center gap-4 self-end md:self-center">
                        <div className="text-right">
                            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-white">
                                Mural de <span className="text-zinc-500">Avisos</span>
                            </h1>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mt-1">
                                Constrictor Team
                            </p>
                        </div>
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
                            className="group relative cursor-zoom-in aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl hover:shadow-white/5 transition-all flex flex-col justify-end"
                        >
                            {/* Selo Visual de Inscrições Abertas */}
                            {item.actionLink && (
                                <div className="absolute top-4 right-4 bg-yellow-500 text-black text-[10px] md:text-xs font-black px-3 py-1.5 rounded-full z-30 shadow-lg flex items-center gap-1.5 uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping absolute"></span>
                                    <span className="w-1.5 h-1.5 bg-black rounded-full relative"></span>
                                    Inscrições Abertas
                                </div>
                            )}

                            {/* Imagem */}
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Overlay Hover (Efeito de Zoom) - Ignora cliques para não atrapalhar os botões */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20 shadow-xl">
                                    <ZoomIn size={24} />
                                </div>
                            </div>

                            {/* CAPTAÇÃO 1: Botão direto na Galeria */}
                            {item.actionLink && (
                                <>
                                    {/* Gradiente escuro para dar leitura ao botão */}
                                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20 pointer-events-none"></div>

                                    {/* Botão flutuante na galeria */}
                                    <div className="relative z-30 p-4 w-full">
                                        <a
                                            href={item.actionLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()} // ISSO AQUI IMPEDE QUE A FOTO ABRA SE ELE CLICAR NO BOTÃO
                                            className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-black font-extrabold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-1 uppercase tracking-wide text-[11px] sm:text-xs"
                                        >
                                            <WhatsAppIcon />
                                            Entrar no Grupo
                                        </a>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* --- LIGHTBOX (MODAL) --- */}
                <AnimatePresence>
                    {selectedId && selectedFlyer && (
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
                                className="relative w-full max-w-4xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-white/10 flex flex-col"
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
                                <div className="relative w-full h-[70vh] md:h-[80vh] bg-black">
                                    <Image
                                        src={selectedFlyer.src}
                                        alt={selectedFlyer.alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* CAPTAÇÃO 2: Botão dentro do Modal */}
                                {selectedFlyer.actionLink && (
                                    <div className="p-4 md:p-6 bg-gradient-to-t from-zinc-950 to-zinc-900 border-t border-white/5 flex items-center justify-center shrink-0">
                                        <a
                                            href={selectedFlyer.actionLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-2/3 md:w-1/2 flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-black font-extrabold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:-translate-y-1 uppercase tracking-wide text-[13px] md:text-sm"
                                        >
                                            <WhatsAppIcon />
                                            Entrar no Grupo de Pedidos
                                        </a>
                                    </div>
                                )}

                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </main>
    )
}