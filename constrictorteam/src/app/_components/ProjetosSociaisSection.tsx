'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

// --- Componente de Efeito de Digitação (Typewriter) ---
function TypewriterText({ text }: { text: string }) {
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(100)

    useEffect(() => {
        let timer: NodeJS.Timeout
        const handleType = () => {
            const fullText = text
            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            )

            setTypingSpeed(isDeleting ? 50 : 110)

            if (!isDeleting && displayedText === fullText) {
                timer = setTimeout(() => setIsDeleting(true), 3000)
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setTypingSpeed(350)
            }
        }

        timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, loopNum, text, typingSpeed])

    return (
        <span className="inline-flex items-center font-black tracking-tight text-white">
            <span>{displayedText}</span>
            <span className="inline-block w-[3px] h-[0.9em] bg-white ml-1.5 animate-pulse" />
        </span>
    )
}

export default function ProjetosSociaisSection() {
    const featuredPhotos = [
        {
            src: '/projeto1.jpeg',
            alt: 'Aliança Constrictor Team, OneSight e Rotary Club',
            title: 'Aliança Oficial',
            subtitle: 'OneSight & Rotary'
        },
        {
            src: '/projeto2.jpeg',
            alt: 'Ação Visão Oftalmológica',
            title: 'Ação Visão',
            subtitle: 'Triagem & Saúde'
        },
        {
            src: '/projeto3.jpeg',
            alt: 'Exames para Alunos',
            title: 'Cuidado Integral',
            subtitle: 'Exames & Óculos'
        },
        {
            src: '/projeto4.jpeg',
            alt: 'Jiu-Jitsu e Transformação',
            title: 'Além do Tatame',
            subtitle: 'Formação Cidadã'
        },
        {
            src: '/projeto5.jpeg',
            alt: 'Entrega Social',
            title: 'Impacto Real',
            subtitle: 'Comunidade'
        },
    ]

    return (
        <section className="w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden border-t border-white/10">
            {/* Foto de Background com Overlay Cinematográfico */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/ct2.webp"
                    alt="Constrictor Team Dojo Background"
                    fill
                    className="object-cover opacity-25 scale-105"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- CABEÇALHO DA SEÇÃO COM EFEITO DE DIGITAÇÃO --- */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-lg"
                    >
                        <ShieldCheck size={16} className="text-white" />
                        Projetos Sociais Constrictor Team
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight"
                    >
                        <span className="block text-zinc-400 text-2xl sm:text-3xl md:text-4xl mb-1">
                            AÇÃO SOCIAL:
                        </span>
                        <TypewriterText text="OLHOS QUE ENXERGAM O FUTURO" />
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-2"
                    >
                        Em aliança com a <strong>OneSight EssilorLuxottica Foundation</strong> e o <strong>Rotary Club Taguatinga Oeste</strong>, levamos exames oftalmológicos gratuitos e doação de óculos de grau para crianças e jovens dos nossos núcleos sociais.
                    </motion.p>
                </div>

                {/* --- GRADE DE TODAS AS 5 FOTOS DO PROJETO --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                    {featuredPhotos.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950 border border-white/15 shadow-2xl backdrop-blur-md"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 20vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                                    {item.subtitle}
                                </span>
                                <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug uppercase">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- CARDS DE INFORMAÇÃO E BOTÃO DE ACESSO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-950/90 border border-white/15 rounded-3xl p-6 sm:p-8 items-center shadow-2xl backdrop-blur-md"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-white/10 text-white border border-white/15 shrink-0">
                            <Eye size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-tight text-white text-sm sm:text-base">Ação Visão</h4>
                            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                                Triagens, exames oftalmológicos e doação de óculos de grau completos.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-white/10 text-white border border-white/15 shrink-0">
                            <Sparkles size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-tight text-white text-sm sm:text-base">Núcleos Sociais</h4>
                            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                                Recanto das Emas, Riacho Fundo, Sobradinho e novas regiões.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <Link
                            href="/projetos"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-black font-extrabold rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 uppercase tracking-wide text-xs sm:text-sm shadow-xl"
                        >
                            <span>Conhecer Projetos</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
