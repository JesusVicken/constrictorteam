'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import { motion } from 'framer-motion'

export default function SeminariosPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 blur-[120px]" />
            </div>

            {/* ================= HEADER ================= */}
            <section className="relative z-10 pt-20 pb-16 text-center">
                {/* LOGO */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/constrictor.webp"
                        alt="Constrictor Team"
                        width={220}
                        height={220}
                        className="opacity-90"
                        priority
                    />
                </div>

                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight">
                    Seminários
                </h1>
                <p className="text-gray-400 mt-4">
                    Experiência, evolução e alto nível técnico
                </p>
            </section>

            {/* ================= TIMELINE ================= */}
            <section className="relative z-10 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-3xl font-black uppercase mb-12 flex items-center gap-4"
                        data-aos="fade-up"
                    >
                        <span className="w-10 h-[2px] bg-white/40"></span>
                        Linha do Tempo
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* SEMINÁRIO KIM */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-zinc-900/60 border border-white/10 rounded-3xl overflow-hidden"
                        >
                            {/* Imagem */}
                            <div className="relative h-[320px]">
                                <Image
                                    src="/seminarioKim.jpg"
                                    alt="Seminário Kim Ludgero"
                                    fill
                                    className="object-cover grayscale opacity-60"
                                />

                                {/* Overlay REALIZADO */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                                    <span className="text-3xl font-black uppercase tracking-widest text-white/80 border border-white/30 px-8 py-3 rotate-[-6deg]">
                                        Realizado
                                    </span>
                                </div>

                                {/* LOGO ASSINATURA */}
                                <div className="absolute bottom-4 right-4 opacity-70">
                                    <Image
                                        src="/constrictorteam.png"
                                        alt="Constrictor Team"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                            </div>

                            {/* Conteúdo */}
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-black uppercase">
                                    Passagem de Guarda
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Professor:{' '}
                                    <strong className="text-white">Kim Ludgero</strong>
                                </p>
                                <p className="text-gray-500 text-sm">
                                    24 de Janeiro • 10h às 12h
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Constrictor Team — Parque da Cidade
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= EM BREVE ================= */}
            <section className="relative py-32 bg-black overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[140px]" />
                </div>

                {/* LOGO WATERMARK */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image
                        src="/constrictorteam.png"
                        alt="Constrictor Team"
                        width={260}
                        height={260}
                        className="opacity-[0.03]"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1 rounded-full border border-white/20 text-xs uppercase tracking-widest text-gray-400"
                    >
                        Constrictor Team
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6"
                    >
                        Novos Seminários
                        <br />
                        <span className="text-white/50">em breve</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-xl mx-auto leading-relaxed"
                    >
                        Estamos preparando novos eventos com professores convidados,
                        conceitos modernos e experiências que elevam o nível do seu
                        Jiu-Jitsu.
                    </motion.p>

                    <div className="mt-12 flex justify-center">
                        <span className="w-24 h-[2px] bg-white/20"></span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8 text-center text-gray-600 text-sm">
                © 2025 Constrictor Team. Todos os direitos reservados.
            </footer>
        </main>
    )
}
