'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
    bgImage: string
    title: string
    subtitle: React.ReactNode
    className?: string
}

export default function ParallaxSection({
    bgImage,
    title,
    subtitle,
    className = ''
}: ParallaxSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Acompanha a rolagem deste container específico pela viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    // Translação vertical suave de -16% a +16% conforme a página rola
    // Funciona 100% acelerado pela GPU no iOS Safari (iPhone/iPad), Android e Desktop
    const y = useTransform(scrollYProgress, [0, 1], ['-16%', '16%'])

    return (
        <section
            ref={containerRef}
            className={`relative min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 ${className}`}
        >
            {/* Camada de Imagem com Parallax Suave */}
            <motion.div
                className="absolute inset-x-0 -top-[20%] h-[140%] w-full bg-cover bg-center pointer-events-none transform-gpu"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    y,
                    willChange: 'transform'
                }}
            />

            {/* Overlay Escuro para Contraste e Legibilidade Perfeita */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />

            {/* Conteúdo Central Responsivo */}
            <div className="relative z-10 text-center max-w-3xl mx-auto px-4" data-aos="fade-up">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-wider uppercase text-white drop-shadow-lg">
                    {title}
                </h2>
                <div className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed text-gray-200">
                    {subtitle}
                </div>
            </div>
        </section>
    )
}
